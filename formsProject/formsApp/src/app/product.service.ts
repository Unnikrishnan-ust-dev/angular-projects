import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewProduct } from './models/NewModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  backendUrls = {
    baseurl : "http://localhost:9090",
    getAllProducts : "http://localhost:9090/product/getProducts",
    createProduct : "http://localhost:9090/product/createProduct",
    updateProduct : "http://localhost:9090/product/updateProduct",
    deleteProduct : "http://localhost:9090/product/deleteProduct"
  }
  
  products : NewProduct[] = [];

  constructor(private http: HttpClient) { }

  saveProduct(product: NewProduct){
    let url = this.backendUrls.createProduct;
    this.http.post<NewProduct>(url, product).subscribe(data => {
      this.products.push(data);
    });
  }

  getProducts(){
    this.http.get<NewProduct[]>(this.backendUrls.getAllProducts).subscribe(data=>{
      this.products =  data;
    })
  }

  updateProduct(product: NewProduct,id: number){
    let url = `${this.backendUrls.updateProduct}/${id}`;

    this.http.put<NewProduct>(url, product).subscribe(data => {
      let newProducts = this.products.filter((value)=>{
        return value.productId!=data.productId;
      });
      newProducts.push(data);
      this.products = newProducts;
    });

  }

  deleteProduct(id: number){
    let url = `${this.backendUrls.deleteProduct}/${id}`;

    this.http.delete<NewProduct>(url).subscribe(data => {
      let newProducts = this.products.filter((value)=>{
        return value.productId!=id.toString();
      });
      this.products = newProducts;
    });

  }
}
