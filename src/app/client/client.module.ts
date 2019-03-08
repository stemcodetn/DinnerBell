import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientPage } from './client.page';
import { ClientResolver } from './client.resolver';

const routes: Routes = [
  {
    path: '',
    component: ClientPage,
    resolve: {
      data: ClientResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientPage],
  providers: [
    ClientResolver
  ]
})
export class ClientPageModule {}
