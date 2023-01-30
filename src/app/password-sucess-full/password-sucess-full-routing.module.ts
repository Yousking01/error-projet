import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordSucessFullPage } from './password-sucess-full.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordSucessFullPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordSucessFullPageRoutingModule {}
