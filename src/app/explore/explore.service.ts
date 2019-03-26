import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
  geoURLend = '.json?access_token=pk.eyJ1IjoiY2FzdWFsLW5lcmQiLCJhIjoiY2pwcHhjcGxhMG52cTN5b2cyeGtkaXZkZyJ9.S1QgnsgWwYiJnnUKyFb2WQ&cachebuster=1553619899926&autocomplete=true&country=us&proximity=-83.9246077%2C35.9643241&language=en'

  constructor(private http: HttpClient) { }
  getGeocoding(location: String) {
    let newLocation = location.replace(' ', '%20');
    return this.http.get(this.geocodingURL + newLocation + this.geoURLend);
  }
  getMarkers() {
    
  }
}
