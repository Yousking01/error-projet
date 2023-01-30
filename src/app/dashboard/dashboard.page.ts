import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  slideOpts = {
    
    speed: 400,
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true

  };
  constructor() { }

  ngOnInit() {
  }

}
