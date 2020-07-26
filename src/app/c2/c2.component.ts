import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  user:string[]=['rohan','sohan','mohan'];
  categories: any[] = [
    {id: 1, name: 'laptop' , desc: 'description', img: 'l1.jpg'},
    {id: 2, name: 'mobile' , desc: 'description', img: 'm1.jpg'},
    {id: 3, name: 'shoes' , desc: 'description', img: 's1.jpeg'},
    {id: 4, name: 'clothes' , desc: 'description', img: 'c1.jpg'}
  
   ];
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
  
  constructor() { }

  ngOnInit() {
  }

}
