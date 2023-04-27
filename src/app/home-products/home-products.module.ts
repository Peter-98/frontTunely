import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeProductsPageRoutingModule } from './home-products-routing.module';

import { HomeProductsPage } from './home-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProductsPageRoutingModule
  ],
  declarations: [HomeProductsPage]
})
export class HomeProductsPageModule {}
