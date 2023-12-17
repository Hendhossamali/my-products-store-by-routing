import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
export const routes: Routes = [
    {path:'',component: HomePageComponent},
    {path:'products', component:ProductsPageComponent},
    {path:'signup', component:SignupPageComponent}
];
