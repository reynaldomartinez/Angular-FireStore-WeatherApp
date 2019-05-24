import { Weather } from './../../shared/interfaces/weather';
import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/weather-data.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {
  }

  get weather(): Weather {
    return this.weatherDataService.weather;
  }
}
