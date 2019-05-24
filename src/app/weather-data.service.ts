import { Injectable } from '@angular/core';
import { Weather } from './shared/interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  weather: Weather = {
    city: '',
    country: '',
    image: '',
    description: null,
    temperature: null,
    lat: null,
    lon: null
  };

  constructor() { }
}
