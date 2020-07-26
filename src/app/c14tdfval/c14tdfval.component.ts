import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c14tdfval',
  templateUrl: './c14tdfval.component.html',
  styleUrls: ['./c14tdfval.component.css']
})
export class C14tdfvalComponent implements OnInit {

  city:string;

  ngOnInit() {
  }
constructor(){}
  add(data)
  {
    console.log(data);
    alert(data);
    alert(data["txtname"]);
    this.city=data["txtCity"];
    alert("city="+this.city);
  }

}
