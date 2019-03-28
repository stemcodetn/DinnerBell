import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('mat-display-3')
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
    if(this.screenWidth < 576) {

    }
  }
  goBack() {
    this.navCtrl.back();
  }
  navigate() {
    this.router.navigate(["/nav"]);
  }

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    })
  }
}
