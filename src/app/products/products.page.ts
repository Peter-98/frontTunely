import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; //
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router'; 
import { DbService } from '../services/db.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {


  items: Array<any> | undefined;

  constructor(
    public loadingCtrl: LoadingController, 
    private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute,
    private activateRoute: ActivatedRoute,
    private dbService: DbService,
    private alertController: AlertController
  ) { }

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

  logout(){ 
    this.router.navigate(["/home"]);
    this.authService.doLogout()
    .then(res => {
      console.log("User logout");
    }, err => {
      console.log(err);
    })
  }


  deleteProduct(productKey: string){
    this.activateRoute.params.subscribe(params => {
      this.dbService.deleteProduct(productKey)
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: 'Producto borrado con exito',
      buttons: ['OK'],
    });

    await alert.present();
  }

}