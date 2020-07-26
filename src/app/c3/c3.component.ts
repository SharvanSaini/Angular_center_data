import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor() { }
  colorTheme:string="blueTheme";
usertitle:string="atbt attribute";
colorName:string="red";

  ngOnInit() {
  }
  changecls()
  {
  
  this.colorTheme="redTheme";
  
  }
  
}
