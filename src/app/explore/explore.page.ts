import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ExploreService } from './explore.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  items: Array<any>;
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
        console.log(data[0].payload.doc.data())
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
}
