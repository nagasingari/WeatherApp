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
  reversedData;
  weatherData;

  constructor(
    private rs: ReverseService,
    private wd: WeatherService
  ) {

  }

  onClickReverese(data) {
    this.reversedData = this.rs.reverse(data);
  }

  onClickGetWheatherDetails(zipCode) {
    this.wd.getWeatherDetails(zipCode)
      .subscribe((data) => {
        this.weatherData = JSON.stringify(data);
      }, (err) => {
        this.weatherData = 'Failed to retrived weather data';
      });
  }
}
