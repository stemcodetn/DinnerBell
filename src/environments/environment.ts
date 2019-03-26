// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAVwnMze87mce5SRuUNoTAHli9P-JYzo6E",
    authDomain: "dinnerbell-222518.firebaseapp.com",
    databaseURL: "https://dinnerbell-222518.firebaseio.com",
    projectId: "dinnerbell-222518",
    storageBucket: "dinnerbell-222518.appspot.com",
    messagingSenderId: "806159444526"	
  },
  mapbox : {
    accessToken : "pk.eyJ1IjoiY2FzdWFsLW5lcmQiLCJhIjoiY2pwcHhjcGxhMG52cTN5b2cyeGtkaXZkZyJ9.S1QgnsgWwYiJnnUKyFb2WQ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeEvent`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
