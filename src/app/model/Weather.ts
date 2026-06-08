export interface HourlyWeather {
  time: Date;
  temperature: number;
  humidity: number;
  weatherCode: number;
  windSpeed: number;
}

export interface Weather {
  city: string;
  latitude: number;
  longitude: number;
  temperature: number;
  humidity: number;
  weatherCode: number;
  windSpeed: number;
  time: Date;
  hourly: HourlyWeather[];
}

export interface WeatherApiHour {
  time_epoch: number;
  temp_c: number;
  humidity: number;
  wind_kph: number;
  condition: {
    code: number;
    text: string;
  };
}

export interface WeatherApiResponse {
  location: {
    name: string;
    lat: number;
    lon: number;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    last_updated_epoch: number;
    condition: {
      code: number;
      text: string;
    };
  };
  forecast: {
    forecastday: Array<{
      hour: WeatherApiHour[];
    }>;
  };
}

export const DUMMY_DATA: Weather = {
  city: 'New York',
  latitude: 40.7128,
  longitude: -74.0060,
  temperature: 20,
  humidity: 50,
  weatherCode: 1000,
  windSpeed: 10,
  time: new Date(),
  hourly: [],
}
