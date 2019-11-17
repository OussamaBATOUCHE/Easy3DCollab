import { Injectable } from '@angular/core';

import {RestInterfaceService} from './rest.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanStateFireStoreService {
  document;
  sig = '?st=2019-11-16T21%3A39%3A42Z&se=2020-11-17T21%3A39%3A00Z&sp=raud&sv=2018-03-28&tn=planstate&sig=OFHEMFJB1nT5XHx1S2t1Q0DZ4mPATvnMXOitBVnrRLg%3D';
  host = 'https://junctionmaligne.table.core.windows.net/planState';
  documentChanges
  constructor(private httpClient: HttpClient) {

  }
  add(planStates) {
  }
  put (body) {

    const entity = {'planStates': JSON.stringify(body)}
    console.log(entity);

    return this.httpClient.put(this.host + '(PartitionKey=\'patientId\',RowKey=\'planId\')' + this.sig,
        entity,
        {headers: new HttpHeaders()
              .set('Content-Type', 'application/json' )});
  }
  get() {

      return this.httpClient.get(this.host + '(PartitionKey=\'patientId\',RowKey=\'planId\')' + this.sig, {headers: new HttpHeaders()
            .set('Content-Type', 'application/json' ).set('Accept','application/json;odata=nometadata')});
    }

}
