import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component: AboutusComponent},
    {path:"registration",component:RegisterComponent}
];
