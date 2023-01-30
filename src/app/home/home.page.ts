import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
