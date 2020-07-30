import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  public category_product =['SPORTSWEAR', 'MENS', 'WOMENS'];
  constructor() { }

  ngOnInit(): void {
  }

}
