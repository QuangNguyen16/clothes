import { Component, OnInit, NgModule} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-box-footer',
  templateUrl: './box-footer.component.html',
  styleUrls: ['./box-footer.component.css']
})
export class BoxFooterComponent implements OnInit {
  public footer:any;
  public footer1:any;
  constructor() { 
    this.footer1=[
      {name: "Service", name1: "Online Help", name2:"Contact Us", name3: "Order Status" ,name4: "Change Location", name5: "FAQ’s"},
      {name: "Quock Shop", name1: "T-Shirt", name2:"Mens", name3: "Womens" ,name4: "Gift Cards", name5: "Shoes"},
      {name: "Policies", name1: "Terms of Use", name2:"Privecy Policy", name3: "Refund Policy" ,name4: "Billing System", name5: "Ticket System"},
      {name: "About Shopper", name1: "Company Information", name2:"Careers", name3: "Store Location" ,name4: "Affillate Program", name5: "Copyright"}
    ]

    this.footer=[
      {image:"../../../assets/img/home/iframe1.png", name: "Circle of Hands", date: "24 DEC 2014"},
      {image:"../../../assets/img/home/iframe2.png", name: "Circle of Hands", date: "24 DEC 2014"},
      {image:"../../../assets/img/home/iframe3.png", name: "Circle of Hands", date: "24 DEC 2014"},
      {image:"../../../assets/img/home/iframe4.png", name: "Circle of Hands", date: "24 DEC 2014"},

  ]}

  ngOnInit(): void {
  }

}
