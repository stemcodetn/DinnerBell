import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {ExploreService} from '../explore.service';
import {GeoJson, FeatureCollection} from '../../map';
import {environment} from '../../../environments/environment';
import testJson from '../../../assets/json/test.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/casual-nerd/cjtpsk2s74nod1fs71qsnzffu';
  lat = 37.75;
  lng = -122.41;
  source: any;
  markers: any;

  constructor(private exploreService: ExploreService) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

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
          center: [this.lng, this.lat]
        })
      })
    }
    this.makeMap();
  }

  makeMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/casual-nerd/cjtpsk2s74nod1fs71qsnzffu",
      zoom: 13,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on("load", (event)=> {
      this.map.addSource('layers', {
        type: 'geojson',
        data: '../../../assets/json/test.geojson'
      })

      this.source = this.map.getSource('layers');

      // this.markers.subscribe(markers => {
      //   let data = new FeatureCollection(markers);
      //   this.source.setData(data);
      // });

      this.map.addLayer({
        id: 'styles',
        type: 'symbol',
        source: 'layers',
        layout: {
          'text-field': '{message}',
          'text-size': 14,
          'text-transform': 'uppercase',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      })
    });

    
  }

}
