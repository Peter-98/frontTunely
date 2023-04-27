import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';
import { ProductsResolverService } from './products-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage,
    resolve: {
      data: ProductsResolverService 
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}