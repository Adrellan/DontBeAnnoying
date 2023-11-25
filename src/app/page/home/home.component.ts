import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceService } from 'src/app/service/price.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(
    private priceService: PriceService
  ) {}

  setPrice(price: number) {
    this.priceService.setPrice(price);
  }

}
