import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ExploreService } from '../explore.service';
import { GeoJson, FeatureCollection } from '../../map';
import { environment } from '../../../environments/environment';
import testJson from '../../../assets/json/test.json';
import { BehaviorSubject } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  list = [];
  map: mapboxgl.Map;
  style = 'mapbox://styles/casual-nerd/cjtpsk2s74nod1fs71qsnzffu';
  lat = 35.975458;
  lng = -83.92167;
  source: any;
  markers: any;
  private _data = new BehaviorSubject<any>([]);

  constructor(private exploreService: ExploreService) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }
  @Input()
  set data(value) {
    this._data.next(value);
  }
  get data() {
    return this._data.getValue();
  }
  ngOnInit() {
    this._data.subscribe(x => {
      this.list = x;
      console.log(this.list);
      //this.markers = this.exploreService.getMarkers(x);
      //console.log("MARKERS", this.markers);
    });
    this.initMap();
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
        data: '../../../assets/json/test.geojson',
      });

      this.source = this.map.getSource('test');
      this.source.setData('../../../assets/json/test.geojson');
      this.map.addLayer({
        id: 'styles',
        type: 'circle',
        source: 'test',
        // layout: {
        //   'text-field': '{message}',
        //   'text-size': 14,
        //   'text-transform': 'uppercase',
        //   'text-offset': [0, 1.5],
        // },
        paint: {
          'circle-radius': 8,
          'circle-color': '#3E4DFF',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
          // 'text-color': '#f16624',
          // 'text-halo-color': '#fff',
          // 'text-halo-width': 8,
        },
      });
    });
  }
}
