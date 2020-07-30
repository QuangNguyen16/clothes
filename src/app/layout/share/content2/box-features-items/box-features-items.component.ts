import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-features-items',
  templateUrl: './box-features-items.component.html',
  styleUrls: ['./box-features-items.component.css']
})
export class BoxFeaturesItemsComponent implements OnInit {
  public feature: any;
  constructor() { 
    this.feature=[
      {image:"../../../../assets/img/home/product1.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart", priceover: "$56",  name1:"Easy Polo Black Edition", namecart1: "Add to cart", },
      {image:"../../../../assets/img/home/product2.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart", priceover: "$56",  name1:"Easy Polo Black Edition", namecart1: "Add to cart", },
      {image:"../../../../assets/img/home/product3.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart", priceover: "$56",  name1:"Easy Polo Black Edition", namecart1: "Add to cart", },
      {image:"../../../../assets/img/home/product4.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart", priceover: "$56",  name1:"Easy Polo Black Edition", namecart1: "Add to cart", },
      {image:"../../../../assets/img/home/product5.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart", priceover: "$56",  name1:"Easy Polo Black Edition", namecart1: "Add to cart", },
      {image:"../../../../assets/img/home/product6.jpg", price:"$56", name:"Easy Polo Black Edition", namecart: "Add to cart", priceover: "$56",  name1:"Easy Polo Black Edition", namecart1: "Add to cart", },
    ]
  }

  ngOnInit(): void {
  }

}
