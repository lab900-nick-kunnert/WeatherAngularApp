import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weather } from './model/Weather';
import { CitySuggestion, DUMMY_SUGGESTIONS } from './model/CitySuggestion';
import { WeatherService } from './service/weather-service';
import { WeatherCard } from './component/weather-card/weather-card';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, from, map, of, switchMap } from 'rxjs';
import { CountryFilterPipe } from './pipe/country-pipe-pipe';
import { HourlyWeatherInfo } from './component/hourly-weather-info/hourly-weather-info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherCard, CountryFilterPipe, HourlyWeatherInfo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  citySearchQuery = signal<string>('');
  countryFilter = signal<string>('');

  weatherResult = signal<Weather | undefined>(undefined);

  suggestions = signal<CitySuggestion[]>([]);

  constructor(private weatherService: WeatherService) {
    toObservable(this.citySearchQuery)
      .pipe(
        map((q) => q.trim()),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((q) => (q ? from(this.weatherService.getAutoCompleteSuggestions(q)) : of([]))),
        takeUntilDestroyed(),
      )
      .subscribe((results) => this.suggestions.set(results));
  }

  async selectSuggestion(suggestion: CitySuggestion) {
    this.citySearchQuery.set(suggestion.name);
    this.suggestions.set([]);
    await this.onSearch();
    this.citySearchQuery.set('');
  }

  async onSearch() {
    this.weatherResult.set(undefined);

    const searchTerm = this.citySearchQuery().trim();
    if (!searchTerm) {
      return;
    }

    const result = await this.weatherService.getWeather(searchTerm);
    if (result) {
      this.weatherResult.set(result);
    }
  }

  protected onCountryFilterInput(newInput: string) {
    this.countryFilter.set(newInput);
  }

  protected onSearchInput(newInput: string) {
    this.citySearchQuery.set(newInput);
  }
}
