import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all',
  standalone: true,
  imports: [NgFor,CurrencyPipe],
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent implements OnInit{
  products : Product[] = [];

  constructor(private service : ProductService,private router : Router){
  }

  ngOnInit(): void {
      this.service.getProducts().subscribe((data)=>{
        this.products = data;
      });
  }

  updateProduct(id: string){
    this.router.navigateByUrl(`/update?id=${id}`);
  }
}
