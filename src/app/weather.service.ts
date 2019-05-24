import { Weather } from './shared/interfaces/weather';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL = `https://api.openweathermap.org/data/2.5/weather?q=`;
  private KEY = 'b233415c5bb7ba040778907a9eb7c12b';
  private IMP = '&units=imperial';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName): Observable<any> {
    return this.http.get<Weather>(`${this.URL}${cityName}&APPID=${this.KEY}${this.IMP}`)
      .pipe(
        map(data => this.weatherSimplifiedPath(data))
      );
  }

  weatherSimplifiedPath(data) {
    return {
      city: data.name,
      country: data.sys.country,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      description: data.weather[0].description,
      temp: data.main.temp,
      lat: data.coord.lat,
      lon: data.coord.lon
    };
  }

}
