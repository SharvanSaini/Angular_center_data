import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyloadingfirstcomponent',
  templateUrl: './lazyloadingfirstcomponent.component.html',
  styleUrls: ['./lazyloadingfirstcomponent.component.css']
})
export class LazyloadingfirstcomponentComponent implements OnInit {

  constructor() {
    console.log("Lazyloadingfirstcomponent loaded");
   }

  ngOnInit() {
  }

}
