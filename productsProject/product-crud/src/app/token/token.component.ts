import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../token.service';
import { Token } from '../models/Token';
import { catchError, retry, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-token',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './token.component.html',
  styleUrl: './token.component.css'
})
export class TokenComponent {
  greet() {
    this.service.sendAuthenticationRequest().subscribe(data=>{
      console.log(data);
    })
  }

  passwordFieldType : string = "password";

  viewPassword(){
    if(this.passwordFieldType=="password"){
      this.passwordFieldType="text";
    }else{
      this.passwordFieldType="password"
    }
  }
  constructor(private service: TokenService) { }

  token: Token = {
    jwt: ""
  };

  userDetails = {
    username: "",
    password: ""
  }

  handleSubmit() {
    this.service.login(this.userDetails.username, this.userDetails.password).subscribe(token => {
      this.token = token;
      console.log("Authenticated", this.token.jwt);
      localStorage.setItem("token", this.token.jwt);
    })
    
  }

}
