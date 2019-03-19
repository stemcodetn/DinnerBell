import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavPage } from './nav.page';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


const routes: Routes = [
  {
    path: '',
    component: NavPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule
  ],
  declarations: [NavPage]
})
export class NavPageModule {}
