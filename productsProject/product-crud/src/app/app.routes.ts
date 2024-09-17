import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { GetAllComponent } from './get-all/get-all.component';
import { TokenComponent } from './token/token.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    {path: '', component: HeroComponent},
    {path: 'create', component: CreateComponent},
    {path: 'update/:id', component: UpdateComponent},
    {path: 'delete', component: DeleteComponent},
    {path: 'all-products', component: GetAllComponent},
    {path: 'login', component: TokenComponent},
];
