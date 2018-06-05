import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Bill } from '../models/bill.model';
import { BaseApi } from '../../../shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {

    constructor(public http: Http) {
        super(http);
    }

    getBill(): Observable<Bill> {
        return this.get('bill');
    }

    updateBill(bill: Bill): Observable<Bill> {
        return this.put('bill', bill);
    }

    getCurrency(): Observable<any> {
        return this.http.get(`http://data.fixer.io/api/latest?access_key=84110b4c76dfad1eca37137fd6dcbe4b`)
            .map((response: Response) => response.json());
    }
}