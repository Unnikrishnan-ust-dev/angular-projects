import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Product} from "../models/Product";
import { CurrencyPipe, NgFor, UpperCasePipe } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [NgFor,FormsModule,CurrencyPipe,UpperCasePipe],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit{

  productData: Product[] = [];
  filteredProductData: Product[] = [];
  filter: string = "";
  searchKey: string = "";
  sortKey: string = "tohigher";
  brands = ["Reliance", "LG", "Samsung", "Tata"];
  brandProductsArray : {brand:string,count:number}[] = [];
  

  searchOnChange(){
    if(this.searchKey===""){
      this.filteredProductData = this.productData;
    }else{
      this.filteredProductData = this.productData.filter((product)=>{
        return product.name.toUpperCase()== this.searchKey.toUpperCase();
      })
      console.log(this.filteredProductData);
      if(this.filteredProductData.length>0){
        this.filteredProductData = this.productData;
      }
    }
  }

  sort(){
    if(this.sortKey=="tolower"){
      this.filteredProductData = this.productData.sort((a,b)=>{
        return  b.price - a.price;
      })
    }else{
      this.filteredProductData = this.productData.sort((a,b)=>{
        return a.price - b.price;
      })
    }
    
  }

  constructor(private service:DataService){
    this.productData = service.getProducts();
    this.filteredProductData = service.getProducts();
  }
  ngOnInit(): void {
    let brandProducts : Map<string,number> = new Map<string,number>();
    this.productData.map((value)=>{
      if(brandProducts.has(value.brand)){
        let count = brandProducts.get(value.brand);
        if(count)
        brandProducts.set(value.brand,count+1);
      }else{
        brandProducts.set(value.brand,1);
      }
    })

    brandProducts.forEach((value,key)=>{
      this.brandProductsArray.push({brand:key,count:value})
    })
  }

  onFilter(){
    if(this.filter==""){
      this.filteredProductData = this.productData;
    }else{
      this.filteredProductData = this.productData.filter((product)=>{
        return product.brand==this.filter;
      })
    }
    
  }

}
