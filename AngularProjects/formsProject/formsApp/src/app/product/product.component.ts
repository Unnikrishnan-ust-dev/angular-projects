import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/Product';
import { Form, FormsModule, FormSubmittedEvent } from '@angular/forms';
import { PreviewComponent } from '../preview/preview.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,PreviewComponent,NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product : Product = {
    productName: '',
    productDesc: '',
    productCategory: '',
    productPrice: 0,
    productPublish: false
  }
  enablePreview: string = "none";
  @Output() sendProductEvent = new EventEmitter<Product[]>();

  products : Product[] = [];

  onSubmit(form : Form){
    this.products.push(this.product);

    this.product = {
      productName: '',
      productDesc: '',
      productCategory: '',
      productPrice: 0,
      productPublish: false
    };

    // sending the products array to product display component
    this.sendProductEvent.emit(this.products);
  }

  // method to send preview display to the child element
  clickPreview(){
    this.enablePreview = "block";
  }

  // When preview is closed we get display property and we are setting it here
  onPreviewClose(display: string){
    this.enablePreview = display;
  }
}
