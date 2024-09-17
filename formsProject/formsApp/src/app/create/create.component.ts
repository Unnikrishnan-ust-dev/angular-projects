import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { NewProduct } from '../models/NewModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  

  constructor(private service: ProductService) { }

  product : NewProduct = new NewProduct("123","something","BMW",12,1200);


  handleSubmit() {
    this.service.saveProduct(this.product);
   }
}
