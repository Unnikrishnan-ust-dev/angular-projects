import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    {path: '', component: CreateComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: RegistrationComponent},
    {path: 'list-products', component: ProductsDisplayComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent}
];
