import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-recomen-items',
  templateUrl: './box-recomen-items.component.html',
  styleUrls: ['./box-recomen-items.component.css']
})
export class BoxRecomenItemsComponent implements OnInit {
  public data: any;
  constructor() {
    this.data = [
      { image: "../../../../assets/img/home/recommend1.jpg", price: "$56", name: "Easy Black Edition", namecart: "Add to cart" },
      { image: "../../../../assets/img/home/recommend2.jpg", price: "$56", name: "Easy Polo Black Edition", namecart: "Add to cart" },
      { image: "../../../../assets/img/home/recommend3.jpg", price: "$76", name: "Easy Polo Black Edition", namecart: "Add to cart" },
      { image: "../../../../assets/img/home/recommend1.jpg", price: "$56", name: "Easy Polo Black", namecart: "Add to cart" },
      { image: "../../../../assets/img/home/recommend2.jpg", price: "$96", name: "Easy Polo Black Edition", namecart: "Add to cart" },
      { image: "../../../../assets/img/home/recommend3.jpg", price: "$56", name: "Easy Polo Black", namecart: "Add to cart" },

    ]
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   if (window['slides']) {

    //     window['slides']();
    //   }
    // }, 1000);

  }

}
