import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExplorePage } from './explore.page';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ExploreResolver} from './explore.resolver'

const routes: Routes = [
  {
    path: '',
    component: ExplorePage,
    resolve: {
      data: ExploreResolver
    }
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
  declarations: [ExplorePage],
  providers: [
    ExploreResolver
  ]
})
export class ExplorePageModule {}
