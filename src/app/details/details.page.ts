import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { DbService } from '../services/db.service';
import { Console } from 'console';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  productId:string|null = "";

  product: any | undefined;

  constructor(private activateRoute: ActivatedRoute,
    private dbService: DbService) {
      this.activateRoute.params.subscribe(params => {
        this.dbService.getProduct(params['productId']).then((product)=>{
          this.product = product
        })

      })
     }

  ngOnInit() {
  }

}
