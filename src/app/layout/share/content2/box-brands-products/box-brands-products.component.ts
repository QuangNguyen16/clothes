import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-brands-products',
  templateUrl: './box-brands-products.component.html',
  styleUrls: ['./box-brands-products.component.css']
})
export class BoxBrandsProductsComponent implements OnInit {

  //su dung kieu json
  public name=['Acne','Grüne Erde', 'Albiro', 'Ronhill', 'Oddmolly', 'Boudestijn', 'Rösch creative culture'];
  constructor() { }

  ngOnInit(): void {
  }

}
