import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackslistPageRoutingModule } from './trackslist-routing.module';

import { TrackslistPage } from './trackslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackslistPageRoutingModule
  ],
  declarations: [TrackslistPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrackslistPageModule {}
