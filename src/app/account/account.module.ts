import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


const routes: Routes = [
  {
    path: '',
    component: AccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [AccountPage]
})
export class AccountPageModule {}
