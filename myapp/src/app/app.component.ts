import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault } from '@angular/common';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault,ColorComponent,DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Unnikrishnan G';
  location = "Trivandrum";
  company = "UST";
  productId = "AZ1012341";
  description = "Greate Mobile Phone with Cool features.";
  availableValue = true;
  inStock = this.availableValue;
  quantity = 200;
  orderQuantity = 0;
  html = "<h1>InnerHTML</h1>";
  orderDate : Date = new Date();
  bgColor = "white";
  categories = ["Electronics","Furniture","Accessories"];
  filter = "";

  changeColor(color: string){
    this.bgColor = color;
  }

  clickButton(){
    console.log(this);
  }

  printOrder(inputQty: any,id: any){
    console.log(inputQty.value,id);
  }

  products = [
    {
      "id": "001",
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 89.99,
      "stock": 25,
      "description": "High-quality wireless Bluetooth headphones with noise cancellation and up to 20 hours of battery life."
    },
    {
      "id": "002",
      "name": "Smart Watch Series 5",
      "category": "Accessories",
      "price": 299.99,
      "stock": 15,
      "description": "Advanced smart watch with fitness tracking, heart rate monitoring, and customizable watch faces."
    },
    {
      "id": "003",
      "name": "Ultra HD 4K Television",
      "category": "Electronics",
      "price": 499.99,
      "stock": 10,
      "description": "55-inch Ultra HD 4K television with smart capabilities and high dynamic range (HDR) support."
    },
    {
      "id": "004",
      "name": "Ergonomic Office Chair",
      "category": "Furniture",
      "price": 149.99,
      "stock": 20,
      "description": "Ergonomic office chair with adjustable height, lumbar support, and breathable mesh fabric."
    },
    {
      "id": "005",
      "name": "Stainless Steel Water Bottle",
      "category": "Accessories",
      "price": 24.99,
      "stock": 50,
      "description": "Durable stainless steel water bottle with double-wall insulation to keep beverages cold or hot for hours."
    }
  ]

  filteredProducts = [
    {
      "id": "001",
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 89.99,
      "stock": 25,
      "description": "High-quality wireless Bluetooth headphones with noise cancellation and up to 20 hours of battery life."
    },
    {
      "id": "002",
      "name": "Smart Watch Series 5",
      "category": "Accessories",
      "price": 299.99,
      "stock": 15,
      "description": "Advanced smart watch with fitness tracking, heart rate monitoring, and customizable watch faces."
    },
    {
      "id": "003",
      "name": "Ultra HD 4K Television",
      "category": "Electronics",
      "price": 499.99,
      "stock": 10,
      "description": "55-inch Ultra HD 4K television with smart capabilities and high dynamic range (HDR) support."
    },
    {
      "id": "004",
      "name": "Ergonomic Office Chair",
      "category": "Furniture",
      "price": 149.99,
      "stock": 20,
      "description": "Ergonomic office chair with adjustable height, lumbar support, and breathable mesh fabric."
    },
    {
      "id": "005",
      "name": "Stainless Steel Water Bottle",
      "category": "Accessories",
      "price": 24.99,
      "stock": 50,
      "description": "Durable stainless steel water bottle with double-wall insulation to keep beverages cold or hot for hours."
    }
  ]

  onFilter(){
    if(this.filter==""){
      this.filteredProducts = this.products;
    }else{
      this.filteredProducts = this.products.filter((product)=>{
        return product.category==this.filter;
      })
    }
    
  }
  

}
