import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export interface AppConfig {
  weatherApiKey: string;
  weatherApiUrl: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export const appConfigValue: AppConfig = {
  weatherApiKey: environment.weatherApiKey,
  weatherApiUrl: environment.weatherApiUrl,
};