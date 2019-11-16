import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestInterfaceService {
    private host = 'https://junction-planreview.azurewebsites.net/api/patients/';
    constructor(private httpClient: HttpClient) { }
    get (path: string) {
        console.log(path);
        return this.httpClient.get(this.host + path , {headers: new HttpHeaders()
                .set('Content-Type', 'application/json' )});
    }
    post (path: string, body) {
        return this.httpClient.post(this.host + path, body, {headers: new HttpHeaders()
                .set('Content-Type', 'application/json' )});
    }
    put (path: string, body) {
        return this.httpClient.put(this.host + path,
            body,
            {headers: new HttpHeaders()
                    .set('Content-Type', 'application/json' )});
    }
}
