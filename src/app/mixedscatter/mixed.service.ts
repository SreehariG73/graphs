import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MixedService {
    constructor(private http: HttpClient) { }
    getAlldata(): Observable<any> {
        return this.http.get('http://127.0.0.1:5002/mixedscatter')
    }
}