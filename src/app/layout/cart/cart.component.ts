import { Component, OnInit } from '@angular/core';
import {BoxFooterComponent} from '../share/box-footer/box-footer.component';
import {BoxHeaderComponent} from '../share/box-header/box-header.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
