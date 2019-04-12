import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ExploreService } from './explore.service';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  @ViewChild('sidenav') sidenav;
  items: Array<any>;
  control = new FormControl('side');
  sideNavIsOut = false;
  locale = <any>[];
  map: mapboxgl.Map;
  style = 'mapbox://styles/casual-nerd/cjtpsk2s74nod1fs71qsnzffu';
  lat = 35.975458;
  lng = -83.92167;
  source: any;
  markers = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private exploreService: ExploreService
  ) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2FzdWFsLW5lcmQiLCJhIjoiY2pwcHhjcGxhMG52cTN5b2cyeGtkaXZkZyJ9.S1QgnsgWwYiJnnUKyFb2WQ';
  }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData().then(() => this.initMap());
    }
  }
  async getData() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
        this.items.forEach(item => {
          this.locale.push(item.payload.doc.data().location);
          this.markers.push(
            this.exploreService.getMarkers(item.payload.doc.data().location)
          );
        });
      });
    });
  }
  async presentLoading(loading) {
    return await loading.present();
  }

  getTestData() {
    //console.log(this.exploreService.getMarkers(this.locale));
    this.exploreService.getGeocoding('LN STEM Academy').subscribe(
      data => {
        console.log(data);
      },
      err => console.error(err),
      () => console.log('done loading')
    );
  }
  navigate() {
    this.router.navigate(['/nav']);
  }
  close() {
    this.sidenav.close();
    this.sideNavIsOut = false;
    console.log('Closed!');
  }
  open() {
    this.sidenav.open();
    this.sideNavIsOut = true;
    console.log('Opened!');
  }
  private initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat],
        });
      });
    }

    this.makeMap();
  }

  makeMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/casual-nerd/cjtpsk2s74nod1fs71qsnzffu',
      zoom: 13,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', event => {
      console.log('Map beginning to load');
      this.map.addSource('test', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: this.markers,
        },
      });

      this.source = this.map.getSource('test');
      this.map.addLayer({
        id: 'styles',
        type: 'circle',
        source: 'test',
        paint: {
          'circle-radius': 8,
          'circle-color': '#3E4DFF',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        },
      });
    });
    this.map.on('click', 'styles', (e) => {
      this.map.flyTo({center: e.features[0].geometry.coordinates});
    })
       
    this.map.on('mouseenter', 'styles', () => {
      this.map.getCanvas().style.cursor = 'pointer';
    });
       
    this.map.on('mouseleave', 'styles', () => {
      this.map.getCanvas().style.cursor = '';
    });
  }
}
