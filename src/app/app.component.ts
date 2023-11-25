import { Component, OnInit } from '@angular/core';
import { PriceService } from './service/price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PriceService],
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  constructor(
    private priceService: PriceService,
  ){
  }

  setPrice(price: number){
    this.priceService.setPrice(price);
  }
}
