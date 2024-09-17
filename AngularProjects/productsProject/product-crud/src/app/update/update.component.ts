import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  constructor(private router: Router,private route: ActivatedRoute, private service: ProductService) { }

  deleteProduct() {
    this.service.deleteProduct(this.id);
    this.router.navigateByUrl("/all-products").then(()=>{
      window.location.reload();
    });
  }

  id: string = "";

  product: Product = {
    productId: "",
    price: 0,
    quantity: 0,
    description: "",
    brand: ""
  };

  handleSubmit() {
    this.service.updateProduct(this.product, this.id).subscribe(data => {
      this.product = data;
    });
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.id = data['id'];

      this.service.getSingleProduct(this.id).subscribe(data => {
        this.product = data;
      })
    })

    
  }

}
