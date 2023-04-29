import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data = ""; 

  results: Observable<any> | undefined;  

  constructor(private router : Router) { }

  goToNewPageNavigate() {
    console.log("funciona");
    this.router.navigate(["/tracks", this.data]); 
  }
}
