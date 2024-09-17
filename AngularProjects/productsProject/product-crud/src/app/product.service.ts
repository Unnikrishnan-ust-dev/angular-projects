import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/Product';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  backendUrls = {
    baseurl : "http://localhost:9090",
    getAllProducts : "http://localhost:9090/product/getProducts",
    getSingleProduct : "http://localhost:9090/product/getProduct",
    createProduct : "http://localhost:9090/product/createProduct",
    updateProduct : "http://localhost:9090/product/updateProduct",
    deleteProduct : "http://localhost:9090/product/deleteProduct"
  }

  constructor(private http: HttpClient) { }

  saveProduct(product: Product) : Observable<Product>{
    let url = this.backendUrls.createProduct;
    return this.http.post<Product>(url, product);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.backendUrls.getAllProducts);
  }

  getSingleProduct(id:string): Observable<Product>{
    let url = `${this.backendUrls.getSingleProduct}/${id}`;

    return this.http.get<Product>(url);
  }

  updateProduct(product: Product,id: string) : Observable<Product>{
    let url = `${this.backendUrls.updateProduct}/${id}`;

    return this.http.put<Product>(url, product);

  }

  deleteProduct(id: string){
    let url = `${this.backendUrls.deleteProduct}/${id}`;

    this.http.delete<Product>(url).subscribe(data => {
      console.log(data);
    })

  }
}
