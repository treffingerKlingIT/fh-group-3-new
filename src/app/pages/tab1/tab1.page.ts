import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/core/user';
import {AuthService} from '../../services/core/auth.service';
import {localeDe, MbscCalendarEvent, MbscEventcalendarOptions, setOptions} from "@mobiscroll/angular";
import {HttpClient} from "@angular/common/http";
import {bluetooth} from "ionicons/icons";

setOptions({
  locale: localeDe,
  theme: 'ios',
  themeVariant: 'light',
});

// @ts-ignore
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  protected user: User = null;

  constructor(private authService: AuthService, private http: HttpClient) { }

  myEvents: MbscCalendarEvent[] = [
    {
      start: new Date(2026, 1, 2, 18, 30),
      end: new Date(2026, 1, 2, 20, 0),
      title: 'WSWED Run #13',
      location: 'Start: Kunsthaus',
      allDay: false,
      color: '#47A2D3'
    },

    {
      start: new Date(2026, 1, 17, 19, 0),
      end: new Date(2026, 1, 17, 23, 0),
      title: 'Knit Night',
      location: 'Selis Place',
      allDay: false,
      color: '#EFAC4D'
    }
  ];

  eventSettings: MbscEventcalendarOptions = {
    clickToCreate: 'double',
    dragToCreate: false,
    dragToMove: false,
    dragToResize: false,
    eventDelete: false,
    view: {
      calendar: { type: 'month' },
      agenda: { type: 'week' },
    },
    onEventClick: (args) => {

    },
  };

  public ngOnInit(): void {
    /* this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    }); */

    this.user = this.authService.user;
  }

}
