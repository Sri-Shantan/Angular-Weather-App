import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(city: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=992d2eefe0e864cc0c2d36edbfa07e8d`)
  }
}
