import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {
  screenWidth: number;

  constructor(public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private navCtrl: NavController,
    private platform: Platform) {
      
    }
  ngOnInit() {
    this.screenWidth = this.platform.width();
  }
  goBack() {
    this.navCtrl.back();
  }
  navigate() {
    this.router.navigate(["/nav"]);
  }
}