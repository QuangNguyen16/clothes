import { Component, OnInit } from '@angular/core';
import {BoxFooterComponent} from '../share/box-footer/box-footer.component';
import {BoxHeaderComponent} from '../share/box-header/box-header.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog: any;

  constructor() {
    this.blog = [
      {name: 'GIRLS PINK T SHIRT ARRIVED IN STORE', icon: 'Mac Doe', icon1: '1:33 pm', icon2: 'DEC 5, 2013',
       image: '../../../assets/img/blog/blog-one.jpg', 
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
       + 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', readmore: 'Read More'},
       {name: 'GIRLS PINK T SHIRT ARRIVED IN STORE', icon: 'Mac Doe', icon1: '1:33 pm', icon2: 'DEC 5, 2013',
       image: '../../../assets/img/blog/blog-two.jpg', 
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
       + 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', readmore: 'Read More'},
       {name: 'GIRLS PINK T SHIRT ARRIVED IN STORE', icon: 'Mac Doe', icon1: '1:33 pm', icon2: 'DEC 5, 2013',
       image: '../../../assets/img/blog/blog-three.jpg', 
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
       + 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', readmore: 'Read More'},
    ]
   }

  ngOnInit(): void {
  }

}
