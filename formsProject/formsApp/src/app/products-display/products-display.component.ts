import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-products-display',
  standalone: true,
  imports: [NgFor,CurrencyPipe],
  templateUrl: './products-display.component.html',
  styleUrl: './products-display.component.css'
})
export class ProductsDisplayComponent {
  @Input() products : Product[] = [];

  imgLink : string = "/assets/card-img.jpg";
}
