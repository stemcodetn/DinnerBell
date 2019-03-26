import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {GeoJson} from './map'
import * as mapboxgl from 'mapbox-gl';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;  
  }
}
