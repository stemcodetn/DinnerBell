import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { AngularFireModule } from '@angular/fire';
import {
  AngularFirestoreModule,
  FirestoreSettingsToken,
} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NewEventModalPage } from './new-event-modal/new-event-modal.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClientResolver } from './client/client.resolver';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [AppComponent],
  // declarations: [AppComponent, NewEventModalPage],
  // entryComponents: [NewEventModalPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore
    AngularFireAuthModule, // imports firebase/auth
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    ParticlesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }), // imports firebase/storage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    HttpClientModule,
    ClientResolver,
    WebView,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
