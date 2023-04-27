import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProductsPage } from './home-products.page';
import { HomeProductsResolverService } from './home-products-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeProductsPage,
    resolve: {
      data: HomeProductsResolverService 
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeProductsPageRoutingModule {}
