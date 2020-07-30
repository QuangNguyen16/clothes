import { Component, OnInit } from '@angular/core';
import { BoxFooterComponent } from '../share/box-footer/box-footer.component';
import { BoxHeaderComponent } from '../share/box-header/box-header.component';
import { Content1Component } from '../share/content1/content1.component';
import { Content2Component } from '../share/content2/content2.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
