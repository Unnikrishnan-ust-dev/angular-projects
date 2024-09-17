import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductFormBuilder } from '../models/ProductFormBuilder';

@Component({
  selector: 'app-form-builder-example',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './form-builder-example.component.html',
  styleUrl: './form-builder-example.component.css'
})
export class FormBuilderExampleComponent {
  product : ProductFormBuilder = new ProductFormBuilder('',{age:0,seasons:["winter","summer"]},'',0,0,["dhcp","ola","uber"]);
  
  formBuilder: FormBuilder = new FormBuilder();
  
  productForm = this.formBuilder.group({
    productId: [''],
    brand: [''],
    description: this.formBuilder.group({
      age: ['',[Validators.max(100),Validators.min(1)]],
      seasons: ['']
    }),
    quantity: ['',Validators.required],
    price: ['',Validators.required],
    suppliers: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  })
  
  handleSubmit() {
    console.log(this.productForm.value);
  }

  addNewSupplier() {
    this.productForm.controls.suppliers.push(this.formBuilder.control(''));
  }
}
