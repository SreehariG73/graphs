import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ScatterService {

    constructor(private http: HttpClient) { }

    getAllscatterdata(): Observable<any> {
        return this.http.get('http://127.0.0.1:5002/scatter')
    }
}
