import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type userLogin = {
  userEmail : string;
  userPassword : string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userDetails : userLogin = {
    userEmail : "",
    userPassword : ""
  };

  handleSubmit(event : SubmitEvent){
    console.log(this.userDetails);
    console.log(event);
  }


}
