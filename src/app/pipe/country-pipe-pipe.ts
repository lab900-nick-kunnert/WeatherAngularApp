import { Pipe, PipeTransform } from '@angular/core';
import { CitySuggestion } from '../model/CitySuggestion';

@Pipe({
  name: 'countryFilter',
})
export class CountryFilterPipe implements PipeTransform {
  transform(value: CitySuggestion[], country: string): CitySuggestion[] {
    country = country.trim();
    if (!country) {
      return value;
    }

    return value.filter(suggestion =>
      suggestion.country.toLowerCase().startsWith(country.toLowerCase())
    );
  }
}
