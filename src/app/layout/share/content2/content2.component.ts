import { Component, OnInit } from '@angular/core';
import {BoxBrandsProductsComponent} from '../content2/box-brands-products/box-brands-products.component';
import {BoxCategoryTabComponent} from '../content2/box-category-tab/box-category-tab.component';
import {BoxFeaturesItemsComponent} from '../content2/box-features-items/box-features-items.component';
import {BoxPriceComponent} from '../content2/box-price/box-price.component';
import {BoxRecomenItemsComponent} from '../content2/box-recomen-items/box-recomen-items.component';
import {CategoryProductComponent} from '../content2/category-product/category-product.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
