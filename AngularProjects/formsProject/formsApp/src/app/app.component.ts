import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductComponent } from './product/product.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProductsDisplayComponent } from "./products-display/products-display.component";
import { Product } from './models/Product';
import { ReactiveComponent } from "./reactive/reactive.component";
import { FormBuilderExampleComponent } from "./form-builder-example/form-builder-example.component";
import { CreateComponent } from "./create/create.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ProductComponent,
    ResetPasswordComponent, ProductsDisplayComponent, ReactiveComponent, FormBuilderExampleComponent, CreateComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formsApp';
  products : Product[] = [];

  getProductsEvent(productsEvent: Product[]){
    this.products = productsEvent;
  }
}
