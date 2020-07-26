import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c10ratingio',
  templateUrl: './c10ratingio.component.html',
  styleUrls: ['./c10ratingio.component.css']
})
export class C10ratingioComponent implements OnInit {

  constructor() { }
  @Input()
  prodRating:number;
  // category: any;
  
  @Output()
  uRatingCount=new EventEmitter();
  
  CountRatingFun(prodRating11:any){
  let prodInfo={prodRating11,status:'we are trying to improve'}

  this.uRatingCount.emit(prodInfo);
  }
  ngOnInit() {
  }

}
