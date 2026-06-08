import { Component, input } from '@angular/core';
import { Weather } from '../../model/Weather';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'weather-card',
  imports: [DatePipe],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
})
export class WeatherCard {
  weather = input.required<Weather | undefined>({
    alias: 'weatherResult'
  });
}
