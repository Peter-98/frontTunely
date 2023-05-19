import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {

    this.getLocation(); 

  }
  latitude: number | undefined;  
  longitude: number | undefined;
  accuracy: number | undefined;

  async getLocation() { 
    const position = await Geolocation.getCurrentPosition(); 
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.accuracy = position.coords.accuracy;
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
}
