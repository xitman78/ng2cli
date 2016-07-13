import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'nav-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  brand: string;

  constructor( ) {
    this.brand = 'Angular2 PlayGround';
  }

  ngOnInit() {
  }

}
