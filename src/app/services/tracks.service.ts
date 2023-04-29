import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  testOperation () { 
    console.log("Executing test operation...");
  }

  url = 'http://localhost:3000/tracks/search/'; 

  constructor(private http: HttpClient) { } 

  searchData(title: string): Observable<any> { 
    return this.http.get(`${this.url}${encodeURI(title)}`); 
  }
}