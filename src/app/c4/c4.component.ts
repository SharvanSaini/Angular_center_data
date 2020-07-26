import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  constructor() { }
  products:any[]=[
    {pid:1 , catid:1,name:'dell',img:'l1.jpg',desc:'description',price:15000,qty:100},
    {pid:2 , catid:1,name:'dell',img:'l2.jpg',desc:'description',price:35000,qty:100},
    {pid:3 , catid:2,name:'apple',img:'m1.jpg',desc:'description',price:45000,qty:100},
    {pid:4 , catid:2,name:'samsung',img:'m2.jpg',desc:'description',price:45000,qty:100},
    {pid:5 , catid:3,name:'puma',img:'s1.jpeg',desc:'description',price:65000,qty:100},
    {pid:6 , catid:3,name:'woodland',img:'s2.jpg',desc:'description',price:75000,qty:100},
    {pid:7 , catid:4,name:'levis',img:'c1.jpg',desc:'description',price:85000,qty:100},
    {pid:8 , catid:4,name:'wrangler',img:'c2.jpg',desc:'description',price:85000,qty:100}
  ];
  
isImgVis:boolean=false;
logoHeight:number=100;
logoWidth:number=100;

toggle(){
//  alert('btn click');

this.isImgVis=!this.isImgVis;
}
  ngOnInit() {
  }

}
