import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {

  constructor(public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private navCtrl: NavController) {
     }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
  navigate() {
    this.router.navigate(["/nav"]);
  }
}
