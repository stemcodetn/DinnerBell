import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  slideOpts = {
    slidesPerView: 1.0,
    spaceBetween: 0,
    centeredSlides: true
  };
  screenWidth: number;
  constructor(private router: Router, private platform: Platform) {}

  ngOnInit() {
    this.screenWidth = this.platform.width();
  }
  navigate() {
    this.router.navigate(['/nav']);
  }
  
}
