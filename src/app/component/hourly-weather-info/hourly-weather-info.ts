import { Component, input } from '@angular/core';
import { HourlyWeather } from '../../model/Weather';
import { DatePipe } from '@angular/common';
import { HourlyWeatherFromPipe } from '../../pipe/hourly-weather-from-pipe';
import { Highlighted } from '../../directive/highlighted';

@Component({
  selector: 'hourly-weather-info',
  imports: [DatePipe, HourlyWeatherFromPipe, Highlighted],
  templateUrl: './hourly-weather-info.html',
  styleUrl: './hourly-weather-info.css',
})
export class HourlyWeatherInfo {
  hourlyWeatherInfo = input.required<HourlyWeather[] | undefined>({
    alias: 'hourlyWeather',
  });
  protected readonly now = new Date();
}
