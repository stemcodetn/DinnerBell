import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {ExploreService} from '../explore.service';
import {GeoJson, FeatureCollection} from '../../map';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;

  source: any;
  markers: any;

  constructor(private exploreService: ExploreService) { }

  ngOnInit() {
    this.markers = this.exploreService.getMarkers();
    this.initMap();
  }
  private initMap() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat];
        })
      })
    }
    this.makeMap();
  }

  makeMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

  }

}
