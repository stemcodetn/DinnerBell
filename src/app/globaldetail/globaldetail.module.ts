import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GlobaldetailPage } from './globaldetail.page';
import { GlobalDetailsResolver } from './globaldetail.resolver';

const routes: Routes = [
  {
    path: '',
    component: GlobaldetailPage,
    resolve: {
      data: GlobalDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GlobaldetailPage],
  providers: [GlobalDetailsResolver]
})
export class GlobaldetailPageModule {}
