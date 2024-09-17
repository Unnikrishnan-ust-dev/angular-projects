import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/Product';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private service: ProductService,private router: Router) { }
  isLoading : boolean = false;

  product : Product = {
    productId: "",
    price : 0,
    quantity: 0,
    description: "",
    brand : ""
  };


  handleSubmit() {
    this.isLoading = true;
    this.service.saveProduct(this.product).subscribe(data => {
      this.product = {
        productId: "",
        price : 0,
        quantity: 0,
        description: "",
        brand : ""
      };
  
      this.router.navigateByUrl("/all-products");
    });
    this.isLoading = false;
   }

}
