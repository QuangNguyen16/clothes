import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit {
  public content1: any=[];
  public images: any;
  constructor() { 
    this.content1=[
      {
        id: 1, font: "E", font1: "-SHOP", title: "Free E-Commerce Template", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", choose: "GET IT", img:"../../../assets/img/home/girl1.jpg",
      img1:"../../../assets/img/home/pricing.png"},
      {
        id: 2, font: "E", font1: "-SHOP", title: "100% Responsive Design", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", choose: "GET IT", img:"../../../assets/img/home/girl2.jpg",
      img1:"../../../assets/img/home/pricing.png"},
      {
        id: 3, font: "E", font1: "-SHOP", title: "Free E-Commerce Template", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", choose: "GET IT", img:"../../../assets/img/home/girl3.jpg",
      img1:"../../../assets/img/home/pricing.png"},
  ]}
  

  ngOnInit(): void {
    
  }

}
