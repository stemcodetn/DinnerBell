import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ExploreService } from './explore.service';
import {FormControl} from '@angular/forms';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  items: Array<any>;
  control = new FormControl('side');
  sideNavIsOut = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private exploreService: ExploreService
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }
  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
    })
  }
  async presentLoading(loading) {
    return await loading.present();
  }

  getTestData() {
    this.exploreService.getGeocoding('LN STEM Academy').subscribe((data) => {
      console.log(data);
    }, err => console.error(err),
    () => console.log('done loading'));
  }
  navigate() {
    this.router.navigate(["/nav"]);
  }
  close() {
    this.sidenav.close();
    this.sideNavIsOut = false;
    console.log("Closed!")
  }
  open() {
    this.sidenav.open();
    this.sideNavIsOut = true;
    console.log("Opened!")
  }
}
