import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceService } from '../../service/price.service';

@Component({
  selector: 'app-advertistment',
  templateUrl: './advertistment.component.html',
  styleUrls: ['./advertistment.component.scss']
})
export class AdvertistmentComponent implements OnInit{

  price: number = 37.5;

  constructor(
    public priceService: PriceService,
  ){
  }

  ngOnInit(): void {
    this.price = this.priceService.getPrice();
  }

  setPrice(price: number){
    this.price = price;
  }

}
