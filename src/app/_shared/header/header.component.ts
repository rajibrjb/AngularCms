import { Component, OnInit , AfterViewInit } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

}

}
