import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, from, map, mergeMap, take } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {


  url = 'http://webapps.pedromrtaguilera.tech:3000/auth'; 

  postLogin(email: string, pass: string): Observable<string> {
    const body = {
      email: email,
      pass: pass
    };
    console.log('LOG 1', body);
    return this.http.post(`${this.url}/login`, body).pipe(
      map((response: any) => {
        if (response && response.token) {
          console.log('LOG 2', response);
          // Guarda el token en el almacenamiento local
          localStorage.setItem('token', response.token);
          return response.token;
        } else {
          console.log('LOG 3', response);
          throw new Error('Error en la solicitud');
        }
      }),
      catchError((error: any) => {
        console.log('LOG 4');
        throw new Error('Error en la solicitud');
      })
    );
  }

  postSignUp(email: string, pass: string): Observable<string> {
    const body = {
      email: email,
      pass: pass
    };
    return this.http.post(`${this.url}/signup`, body).pipe(
      map((response: any) => {
        if (response && response.token) {
          // Guarda el token en el almacenamiento local
          localStorage.setItem('token', response.token);
          return response.token;
        } else {
          throw new Error('Error en la solicitud');
        }
      }),
      catchError((error: any) => {
        throw new Error('Error en la solicitud');
      })
    );
  }

  userData: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth ,
    private http: HttpClient
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '{}');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    });
  }

  doLogin(value: { email: string; password: string }): Observable<string> {
    const { email, password } = value;
    return this.postLogin(email, password).pipe(
      mergeMap((token: string) => {
        return from(firebase.auth().signInWithEmailAndPassword(email, password)).pipe(
          mergeMap((firebaseUserCredential: firebase.auth.UserCredential) => {

            // Devuelve el token de MongoDB
            return from(Promise.resolve(token));
          }),
          catchError((error: any) => {
            // Manejar errores de Firebase
            throw new Error('Error en la autenticación de Firebase');
          })
        );
      }),
      catchError((error: any) => {
        // Manejar errores del inicio de sesión en MongoDB
        throw new Error('Error en la autenticación de MongoDB');
      })
    );
  }

  doLogout(){ 
    return new Promise<void>((resolve, reject) => {
      this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        // this.dbService.unsubscribeOnLogOut();
        resolve();
      }).catch((error) => {
        console.log(error);
        reject();
      });
    })
  }

  doRegister(value: { email: string; password: string }) {
    return new Observable<any>((observer) => {
      this.postSignUp(value.email, value.password).subscribe(
        (token: string) => {

          // Guarda el token en el almacenamiento local
          localStorage.setItem('token', token);

          this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
            .then((credential: firebase.auth.UserCredential) => {
              observer.next(credential);
              observer.complete();
            })
            .catch((error: any) => {
              observer.error(error);
            });
        },
        (error: any) => {
          observer.error(error);
        }
      );
    });
  }
  
  

  isAuthenticated() {
    return this.afAuth.authState;
  }

  async getUserId(): Promise<string | null> {
    const user = await this.afAuth.authState.pipe(take(1)).toPromise();
    console.log('respues getId', user);
    return user ? user.uid : null;
  }
  
  

}