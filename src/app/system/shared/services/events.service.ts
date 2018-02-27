import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../../../shared/core/base-api';
import { FBEvent } from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {
    constructor(public http: Http) { 
        super(http);
    }

    addEvent(event: FBEvent): Observable<FBEvent> {
        return this.post('events', event);
    }

    getEvents(): Observable<FBEvent[]> {
        return this.get('events');
    }
    
}