import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Token } from './models/Token';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http : HttpClient) { }

  login(username:string,password:string) : Observable<Token>{
    let url = "http://localhost:8090/authenticate";

    return this.http.post<Token>(url,{username,password});
  }

  sendAuthenticationRequest(){
    let url = "http://localhost:8090/greet";
    let token = localStorage.getItem("token");
    let authHeader = new HttpHeaders().set("Authorization",`Bearer ${token}`);

    return this.http.get(url,{headers:authHeader,responseType: 'text' as 'json'});

  }
}
