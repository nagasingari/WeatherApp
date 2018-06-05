import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl: string = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  appId: string = 'dbd57fd18ad1415cfa823370ab48681f';

  constructor(private http: HttpClient) { }

  getWeatherDetails(zipCode: number): Observable<any> {
    return this.http.get(this.weatherUrl + '30338,us&APPID=' + this.appId);
  }
}
