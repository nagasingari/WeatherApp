import { Component } from '@angular/core';
import { ReverseService } from './reverse.service';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReverseService, WeatherService]
})
export class AppComponent {
  dataToReverse: string = '';
  reversedData: string = '';
  zipCode;
  weatherData: Object = null;
  isGetWeatherDataInprogress: boolean = false;

  constructor(
    private rs: ReverseService,
    private ws: WeatherService
  ) {

  }

  onClickReverese() {
    this.reversedData = this.rs.reverse(this.dataToReverse);
  }

  onClickGetWheatherDetails() {
    this.weatherData = null;
    this.isGetWeatherDataInprogress = true;
    this.ws.getWeatherDetails(this.zipCode)
      .subscribe((data) => {
        this.weatherData = JSON.stringify(data);
        this.isGetWeatherDataInprogress = false;
      }, (err) => {
        this.weatherData = 'Failed to retrive weather data';
        this.isGetWeatherDataInprogress = false;
      });
  }
}
