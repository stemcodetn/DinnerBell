import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
// import testJson from '../../assets/json/test.json';

@Injectable({
  providedIn: "root"
})
export class ExploreService {
  private list = new BehaviorSubject([]);
  currentList = this.list.asObservable();

  geocodingURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  geoURLend =
    ".json?access_token=pk.eyJ1IjoiY2FzdWFsLW5lcmQiLCJhIjoiY2pwcHhjcGxhMG52cTN5b2cyeGtkaXZkZyJ9.S1QgnsgWwYiJnnUKyFb2WQ&cachebuster=1553619899926&autocomplete=true&country=us&proximity=-83.9246077%2C35.9643241&language=en";

  constructor(private http: HttpClient) {}

  changeList(newList: []) {
    this.list.next(newList);
  }
  getGeocoding(location: String) {
    let newLocation = location.replace(" ", "%20");
    return this.http.get(this.geocodingURL + newLocation + this.geoURLend);
  }

  getMarkers(locale: String) {
    let obj = {};
    let tempLocale: Observable<Object>;
    let geoJSON = {};
    // for (const item in locale) {
    //   console.log(item);
    // }
    // for (let i = 0; i < locale.length; i++) {
    //   tempLocale = this.getGeocoding(locale[i]);
    //   tempLocale.subscribe(marker => {
    //     console.log("MARKER", marker);
    //     obj.push({
    //       type: "Feature",
    //       properties: {},
    //       geometry: {
    //         type: "Point",
    //         coordinates: [
    //           marker.features[0].geometry.coordinates[0],
    //           marker.features[0].geometry.coordinates[1]
    //         ]
    //       }
    //     });
    //   });
    // }
    // locale.forEach((location, index, ) => {

    //   tempLocale = this.getGeocoding(location);
    //   tempLocale.subscribe(marker => {
    //   console.log("MARKER", marker);
    //     obj.push({
    //       "type": "Feature",
    //       "properties": {},
    //       "geometry": {
    //         "type": "Point",
    //         "coordinates": [
    //           marker.features[0].geometry.coordinates[0],
    //           marker.features[0].geometry.coordinates[1]
    //         ]
    //       }
    //     })

    //   });

    // });
    tempLocale = this.getGeocoding(locale);
      tempLocale.subscribe(marker => {
      console.log("MARKER", marker);
        obj["type"] = "Feature";
        obj["properties"] = {};
        obj["geometry"] = {
          "type": "Point",
          "coordinates": [
            marker.features[0].geometry.coordinates[0],
            marker.features[0].geometry.coordinates[1]
          ]
        };

      });
      console.log("SERVICE OUTPUT", obj);
    return obj;
    
  }
}
