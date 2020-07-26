import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c14tdf',
  templateUrl: './c14tdf.component.html',
  styleUrls: ['./c14tdf.component.css']
})
export class C14tdfComponent implements OnInit {

  constructor() { }
  city: string;

  ngOnInit() {
  }

  add(data)
  {
     console.log(data);
    // alert(data);
    alert(data["txtname"]);
    this.city=data["txtCity"];
    alert("city="+this.city);
  }

}