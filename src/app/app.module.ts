import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxHeaderComponent } from './layout/share/box-header/box-header.component';
import { BoxFooterComponent } from './layout/share/box-footer/box-footer.component';
import { Content1Component } from './layout/share/content1/content1.component';
import { Content2Component } from './layout/share/content2/content2.component';
import { BoxBrandsProductsComponent } from './layout/share/content2/box-brands-products/box-brands-products.component';
import { BoxCategoryTabComponent } from './layout/share/content2/box-category-tab/box-category-tab.component';
import { BoxFeaturesItemsComponent } from './layout/share/content2/box-features-items/box-features-items.component';
import { BoxPriceComponent } from './layout/share/content2/box-price/box-price.component';
import { CategoryProductComponent } from './layout/share/content2/category-product/category-product.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { CartComponent } from './layout/cart/cart.component';
import { ContactComponent } from './layout/contact/contact.component';
import { HomeComponent } from './layout/home/home.component';
import { BlogComponent } from './layout/blog/blog.component';
import { ProductComponent } from './layout/product/product.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CartComponent,
    ContactComponent,
    HomeComponent,
    Content1Component,
    Content2Component,
    BoxBrandsProductsComponent,
    BoxCategoryTabComponent,
    BoxFeaturesItemsComponent,
    BoxFooterComponent,
    BoxHeaderComponent,
    CategoryProductComponent,
    BoxPriceComponent,
    BlogComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
