import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, firstValueFrom, of } from 'rxjs';
import { DUMMY_DATA, Weather, WeatherApiResponse } from '../model/Weather';
import { CitySuggestion, DUMMY_SUGGESTIONS } from '../model/CitySuggestion';
import { APP_CONFIG } from '../config/app-config';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly dummyWeatherData: Promise<Weather> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DUMMY_DATA);
    }, 300);
  });
  private readonly dummySuggestions: Promise<CitySuggestion[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DUMMY_SUGGESTIONS);
    }, 300);
  });

  private http = inject(HttpClient);
  private config = inject(APP_CONFIG);
  private apiKey = this.config.weatherApiKey;
  private url = this.config.weatherApiUrl;

  private useDummyData = false;

  async getAutoCompleteSuggestions(searchTerm: string): Promise<CitySuggestion[]> {
    if (this.useDummyData) {
      return this.dummySuggestions;
    }

    return firstValueFrom(
      this.http
        .get<CitySuggestion[]>(`${this.url}/search.json`, {
          params: {
            key: this.apiKey,
            q: searchTerm,
          },
        })
        .pipe(catchError((_: HttpErrorResponse) => of([] as CitySuggestion[]))),
    );
  }

  async getWeather(searchTerm: string): Promise<Weather | null> {
    if (this.useDummyData) {
      return this.dummyWeatherData;
    }

    const res = await firstValueFrom(
      this.http
        .get<WeatherApiResponse>(`${this.url}/forecast.json`, {
          params: {
            key: this.apiKey,
            q: searchTerm,
            days: '1',
            aqi: 'no',
            alerts: 'no',
          },
        })
        .pipe(catchError((_: HttpErrorResponse) => of(null))),
    );

    if (!res) {
      return null;
    }

    return {
      city: res.location.name,
      latitude: res.location.lat,
      longitude: res.location.lon,
      temperature: res.current.temp_c,
      humidity: res.current.humidity,
      weatherCode: res.current.condition.code,
      windSpeed: res.current.wind_kph,
      time: new Date(res.current.last_updated_epoch * 1000),
      hourly: res.forecast.forecastday[0].hour.map((h) => ({
        time: new Date(h.time_epoch * 1000),
        temperature: h.temp_c,
        humidity: h.humidity,
        weatherCode: h.condition.code,
        windSpeed: h.wind_kph,
      })),
    };
  }
}
