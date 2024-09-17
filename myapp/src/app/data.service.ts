import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productsData: Product[] = [];
  
  constructor(){
    this.productsData.push(new Product(
      "001",
      "Wireless Bluetooth Headphones",
      "Electronics",
      89.99,
      25,
      "High-quality wireless Bluetooth headphones with noise cancellation and up to 20 hours of battery life.",
      "LG"
    ));
    
    this.productsData.push(new Product(
      "002",
      "Smart Watch Series 5",
      "Accessories",
      299.99,
      15,
      "Advanced smart watch with fitness tracking, heart rate monitoring, and customizable watch faces.",
      "Samsung"
    ));
    
    this.productsData.push(new Product(
      "003",
      "Ultra HD 4K Television",
      "Electronics",
      499.99,
      10,
      "55-inch Ultra HD 4K television with smart capabilities and high dynamic range (HDR) support.",
      "LG"
    ));
    
    this.productsData.push(new Product(
      "004",
      "Ergonomic Office Chair",
      "Furniture",
      149.99,
      20,
      "Ergonomic office chair with adjustable height, lumbar support, and breathable mesh fabric.",
      "Reliance"
    ));
    
    this.productsData.push(new Product(
      "005",
      "Stainless Steel Water Bottle",
      "Accessories",
      24.99,
      50,
      "Durable stainless steel water bottle with double-wall insulation to keep beverages cold or hot for hours.",
      "Tata"
    ));
    
    this.productsData.push(new Product(
      "006",
      "Portable Air Purifier",
      "Electronics",
      129.99,
      12,
      "Compact air purifier with HEPA filter, ideal for removing allergens and pollutants in small spaces.",
      "Samsung"
    ));
    
    this.productsData.push(new Product(
      "007",
      "Gaming Mouse",
      "Electronics",
      49.99,
      30,
      "High-precision gaming mouse with customizable DPI settings and ergonomic design for extended play.",
      "LG"
    ));
    
    this.productsData.push(new Product(
      "008",
      "Adjustable Standing Desk",
      "Furniture",
      399.99,
      8,
      "Height-adjustable standing desk with electric lift mechanism and spacious work surface.",
      "Reliance"
    ));
    
    this.productsData.push(new Product(
      "009",
      "Leather Wallet",
      "Accessories",
      69.99,
      40,
      "Premium leather wallet with multiple card slots, coin pocket, and a sleek, slim design.",
      "Tata"
    ));
    
    this.productsData.push(new Product(
      "010",
      "Fitness Tracker Band",
      "Accessories",
      59.99,
      25,
      "Wearable fitness tracker with activity monitoring, sleep tracking, and smartphone notifications.",
      "Samsung"
    ));
    
  }
  
  public getProducts() : Product[] {
    return this.productsData;
  }
  
}
