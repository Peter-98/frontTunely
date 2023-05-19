import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { IonRatingStarsModule } from 'ion-rating-stars';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    IonRatingStarsModule
  ],
  declarations: [DetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailsPageModule {}
