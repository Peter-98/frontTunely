import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TracksPageRoutingModule } from './tracks-routing.module';

import { TracksPage } from './tracks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TracksPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TracksPage],
  providers: [HttpClient] 
})
export class TracksPageModule {}
