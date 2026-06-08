import { Pipe, PipeTransform } from '@angular/core';
import { HourlyWeather } from '../model/Weather';

@Pipe({
  name: 'hourlyWeatherFrom',
})
export class HourlyWeatherFromPipe implements PipeTransform {
  transform(value: HourlyWeather[], timestampFrom: Date): HourlyWeather[] {
    return value.filter(h => h.time >= timestampFrom);
  }
}
