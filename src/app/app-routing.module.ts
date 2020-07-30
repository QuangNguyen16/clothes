import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import { CartComponent } from './layout/cart/cart.component';
import { ContactComponent } from './layout/contact/contact.component';
import { BlogComponent } from './layout/blog/blog.component';
import { from } from 'rxjs';
import { ProductComponent } from './layout/product/product.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
