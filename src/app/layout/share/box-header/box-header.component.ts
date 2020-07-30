import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-box-header',
  templateUrl: './box-header.component.html',
  styleUrls: ['./box-header.component.css']
})


export class BoxHeaderComponent implements OnInit {
  public inf =['+2 95 01 88 821', 'info@domain.com'];
  constructor() {}

  ngOnInit(): void {
  }

}
