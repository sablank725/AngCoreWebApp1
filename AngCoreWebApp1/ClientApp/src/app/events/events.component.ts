import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: CalendarEvent[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<CalendarEvent[]>(baseUrl + 'api/Event/Events').subscribe(result => {
      this.events = result;
    }, error => console.error(error));
  }

  ngOnInit() {
    var testvar = 12;
  }

  public checkVariables() {
    var testvar = 13;

    testvar++;
  }

  public rowClick(id) {
    console.log(id);
  }

}

interface CalendarEvent {
  Location: string;
  Locked: boolean;
  Organizer: any;
  OriginalStartTime: any;
  Recurrence: any;
  RecurringEventId: any;
  Sequence: any;
  Source: any;
  Start: any;
  Status: any;
  Summary: any;
  Id: any;
  Creator: any;
  Created: any;
  End: any;

}


//  public forecasts: WeatherForecast[];

//constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//  http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
//    this.forecasts = result;
//  }, error => console.error(error));
//}
//}

//interface WeatherForecast {
//  dateFormatted: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}
