import { WeatherData } from './../models/weather.model';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.BaseURL, {
      params: new HttpParams()
        .set('key', environment.apikey)
        .set('q', cityName)
        .set('days', '1'),
    });
  }
}
