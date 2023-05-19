import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


const httpHeaders = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class TracksService {

  testOperation () { 
    console.log("Executing test operation...");
  }

  url = 'http://localhost:3000/tracks'; 


  constructor(private http: HttpClient) { } 

  searchData(title: string): Observable<any> { 
    console.log('Authorization header:', httpHeaders.headers.get('Authorization'));
    return this.http.get(`${this.url}/search/${encodeURI(title)}`, httpHeaders); 
  }

  sendResults(selectedResults: Observable<any[]>): Observable<string> {
    return new Observable((observer) => {
      selectedResults.subscribe((results) => {
        const data = { tracks: results };
        console.log('Resultados seleccionados data:', data);
        this.http.post(`${this.url}`, data, httpHeaders).subscribe({
          next: (response) => {
            console.log('Respuesta del servidor:', response);
            observer.next('OK');
            observer.complete();
          },
          error: (error) => {
            if (error.status === 409) {
              observer.next('Duplicate Song');
            } else {
              console.log('Error en la petición:', error);
              observer.next('KO');
            }
            observer.complete();
          }
        });
      });
    });
  }
  
  


  getData(): Observable<any> { 
    return this.http.get(`${this.url}`); 
  }

  getDataBySearchTerm(searchTerm: string): Observable<any> { 
    return this.http.get(`${this.url}/${encodeURI(searchTerm)}`); 
  }

  getDetails(id: string) {
    return this.http.get(`${this.url}/details/${encodeURI(id)}`); 
  }

  deleteById(id: string) {
    return this.http.delete(`${this.url}/${encodeURI(id)}`, httpHeaders).pipe(
      catchError((error) => {
        let errorMessage = 'Error desconocido';
        if (error.status === 404) {
          errorMessage = 'No se encontró el elemento solicitado';
        } else if (error.status === 500) {
          errorMessage = 'Error interno del servidor';
        }
        return throwError(errorMessage);
      })
    );
  }


  updateTrack(id: string, selectedResults: Observable<any[]>): Observable<string> {
    return new Observable((observer) => {
      selectedResults.subscribe((results) => {
        const data = { tracks: results };
        console.log('Resultados seleccionados data:', data);
        this.http.put(`${this.url}/${encodeURI(id)}`, data, httpHeaders).subscribe({
          next: (response) => {
            console.log('Respuesta del servidor:', response);
            observer.next('OK');
            observer.complete();
          },
          error: (error) => {
            if (error.status === 404) {
              observer.next('Duplicate Song');
            } else {
              console.log('Error en la petición:', error);
              observer.next('KO');
            }
            observer.complete();
          }
        });
      });
    });
  }
  
}