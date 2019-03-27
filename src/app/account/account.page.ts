import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'particles.js/particles';
const particlesJS = (window as any).particlesJS;

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  particleStyle: object = {};
  particleParams: object = {};


  constructor(
    private router: Router
  ) { }
  

  ngOnInit() {
    console.log(window);

    
  particlesJS.load('particles-js', '../../assets/json/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
  }
  navigate() {
    this.router.navigate(["/nav"]);
  }
}
