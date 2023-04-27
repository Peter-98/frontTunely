import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore, 
    public afAuth: AngularFireAuth 
  ){}

  getProducts() { 
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs.collection('users').doc(currentUser.uid).collection('products').snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }

  getProduct(productId: string) { 
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs.doc<any>('users/' + currentUser.uid + '/products/' + productId).valueChanges()
            .subscribe(snapshots => {
              resolve(snapshots);
            }, err => {
              reject(err)
            })
        }
      })
    });
  }

  createProduct(value: { name: any; description: any; image: any; }){  
    return new Promise<any>((resolve, reject) => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const data = {
        name: value.name,
        description: value.description,
        image: value.image
      };
      const id = this.afs.createId();
      this.afs.collection('users').doc('jmN3inUrCXcFkW9SqmU3fXCkOB22').collection('products').doc(id).set(data);
      this.afs.collection('users').doc(user.uid).collection('products').doc(id).set(data)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  updateProduct(productKey: string | undefined, value: firebase.firestore.DocumentData){  
    return new Promise<any>((resolve, reject) => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.afs.collection('users').doc(user.uid).collection('products').doc(productKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  deleteProduct(productKey: string | undefined) { 
    return new Promise<any>((resolve, reject) => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.afs.collection('users').doc('jmN3inUrCXcFkW9SqmU3fXCkOB22').collection('products').doc(productKey).delete()
      this.afs.collection('users').doc(user.uid).collection('products').doc(productKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  unsubscribeOnLogOut() { 
    this.snapshotChangesSubscription.unsubscribe();
  }

  getAllUserProducts() { 
      return new Promise<any>((resolve, reject) => {
            this.snapshotChangesSubscription = this.afs.collection('users').doc('jmN3inUrCXcFkW9SqmU3fXCkOB22').collection('products').snapshotChanges();
            resolve(this.snapshotChangesSubscription);
      })
    }

}