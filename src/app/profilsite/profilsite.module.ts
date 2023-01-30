import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilsitePageRoutingModule } from './profilsite-routing.module';

import { ProfilsitePage } from './profilsite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilsitePageRoutingModule
  ],
  declarations: [ProfilsitePage]
})
export class ProfilsitePageModule {}
