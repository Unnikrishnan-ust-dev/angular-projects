import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ProductFormBuilder } from '../models/ProductFormBuilder';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  handleSubmit(event: any) {
    console.log(this.productForm);
  }

  productForm = new FormGroup({
    productId: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    brand: new FormControl('', [Validators.required,Validators.maxLength(100)]),
    description: new FormControl('', Validators.required),
    quantity: new FormControl(0, [Validators.required,Validators.minLength(1)]),
    price: new FormControl(0, [Validators.required,Validators.min(1)]),
  })
}
