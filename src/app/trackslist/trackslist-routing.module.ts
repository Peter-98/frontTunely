import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackslistPage } from './trackslist.page';

const routes: Routes = [
  {
    path: '',
    component: TrackslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackslistPageRoutingModule {}
