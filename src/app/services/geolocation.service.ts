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
    try{
      const position = await Geolocation.getCurrentPosition(); 
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.accuracy = position.coords.accuracy;
    } catch (error) {
      // Si hay un error al obtener la localización, establece los campos como undefined o valores predeterminados.
      this.latitude = 0;
      this.longitude = 0;
      this.accuracy = 0;
      console.error('Error al obtener la localización:', error);
    }
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => {
          // En caso de error, devuelve una posición predeterminada con latitud, longitud y precisión en 0.
          const defaultPosition = {
            coords: {
              latitude: 0,
              longitude: 0,
              accuracy: 0
            }
          };
          resolve(defaultPosition);
        }
      );
    });
  }
}
