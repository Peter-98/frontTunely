import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

const httpHeaders = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  url = 'http://webapps.pedromrtaguilera.tech:3000/tracks'; 

  sendComment(author: string, comment: string, rating: number, trackId: string, userId: string, longitude: string, latitude: string, accuracy: string) {
    const body = { author, comment, rating, userId, longitude, latitude, accuracy };
    const url = `${this.url}/${trackId}`;
    return this.http.post(url, body).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
      },
      error: (error) => {
        console.log('Error en la petición:', error);
      }
    });
  }

  deleteCommentById(id: string, commentId: string) {
    return this.http.delete(`${this.url}/${encodeURI(id)}/${encodeURI(commentId)}`, httpHeaders).pipe(
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
}


