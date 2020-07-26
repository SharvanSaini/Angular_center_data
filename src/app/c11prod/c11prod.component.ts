import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-c11prod',
  templateUrl: './c11prod.component.html',
  styleUrls: ['./c11prod.component.css']
})
export class C11prodComponent implements OnInit {
  catid:any;
  constructor(private activatedRoute: ActivatedRoute, private router:Router, private location:Location) { 
  
//with querystring
//this.catid=this.activatedRoute.snapshot.queryParams['id'];
//alert(this.catid);

// without querystring
 this.catid=this.activatedRoute.snapshot.params['id'];
// alert(this.catid);

  }



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
  
  ngOnInit() {
  }


  go(){
    this.router.navigate(["/categories"]);
  }

  goBackLoc(){
    this.location.back();
  }
}
