import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientPage } from './client.page';
import { ClientResolver } from './client.resolver';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
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
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [ClientPage],
  providers: [
    ClientResolver,
    HttpClient
  ]
})
export class ClientPageModule {}
