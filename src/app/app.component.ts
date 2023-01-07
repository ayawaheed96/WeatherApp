import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cityName: string = 'Cairo';
  weatherInfo?: WeatherData;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  submitData() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (data) => {
        this.weatherInfo = data;
        console.log(data);
      },
      error: (e) => console.log(e),
    });
  }
  title = 'weatherApp';
}
