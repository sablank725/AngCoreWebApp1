import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event: EventDetails;
  public recordId: "";

  constructor(private _route: ActivatedRoute, public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      var recordName = params["id"];
      this.recordId = recordName;
      this.getEventDetails(this.recordId);
    });
  }

  getEventDetails(id) {
    this.http.get<EventDetails>(this.baseUrl + 'api/Event/Details/' + id).subscribe(result => {
      this.event = result;
    }, error => console.error(error));
  }
}

interface EventDetails {
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
