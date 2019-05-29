import { WeatherDataService } from './../../weather-data.service';
import { WeatherService } from './../../weather.service';
import { Weather } from './../../shared/interfaces/weather';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  cityQuery = '';
  // weather: any;
  errorMessage: any = {};
  // what will happen if errorMessnot an object?????
  constructor(private weatherService: WeatherService, private weatherDataService: WeatherDataService) { }

  ngOnInit() {
  }
  set weather(data: Weather) {
      this.weatherDataService.weather = data;
  }

  searchCity() {
    this.weatherService.getWeatherData(this.cityQuery).subscribe(
      weather => this.weather = weather,
      error => this.errorMessage = error
      // ,error => console.log(error)
    );
  }

}
