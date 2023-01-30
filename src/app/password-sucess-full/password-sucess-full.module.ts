import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordSucessFullPageRoutingModule } from './password-sucess-full-routing.module';

import { PasswordSucessFullPage } from './password-sucess-full.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordSucessFullPageRoutingModule
  ],
  declarations: [PasswordSucessFullPage]
})
export class PasswordSucessFullPageModule {}
