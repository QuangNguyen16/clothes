import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-category-tab',
  templateUrl: './box-category-tab.component.html',
  styleUrls: ['./box-category-tab.component.css']
})
export class BoxCategoryTabComponent implements OnInit {
  public category_tab: any;
  constructor() {
    this.category_tab=[
      {image:"../../../../assets/img/home/gallery1.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart", },
      {image:"../../../../assets/img/home/gallery2.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart", },
      {image:"../../../../assets/img/home/gallery3.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart", },
      {image:"../../../../assets/img/home/gallery4.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart",}
    ]}

  ngOnInit(): void {
  }

}
