import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyWeatherInfo } from './hourly-weather-info';

describe('HourlyWeatherInfo', () => {
  let component: HourlyWeatherInfo;
  let fixture: ComponentFixture<HourlyWeatherInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyWeatherInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(HourlyWeatherInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
