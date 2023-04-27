import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.page.html',
  styleUrls: ['./home-products.page.scss'],
})
export class HomeProductsPage implements OnInit {

  items: Array<any> | undefined;

  constructor(
    public loadingCtrl: LoadingController,  
    private router: Router, 
    private route: ActivatedRoute ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){ 
    const loading = await this.loadingCtrl.create({
      message: 'Por favor, espere...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => { 
      routeData['data'].subscribe((data: any[] | undefined) => {
        loading.dismiss();
        this.items = data;
      })
    })
  }

  async presentLoading(loading: HTMLIonLoadingElement) {
    return await loading.present();
  }
}
