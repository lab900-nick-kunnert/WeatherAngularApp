import { HourlyWeatherFromPipe } from './hourly-weather-from-pipe';

describe('HourlyWeatherFromPipe', () => {
  it('create an instance', () => {
    const pipe = new HourlyWeatherFromPipe();
    expect(pipe).toBeTruthy();
  });
});
