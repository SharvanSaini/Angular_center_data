import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c9ratingio',
  templateUrl: './c9ratingio.component.html',
  styleUrls: ['./c9ratingio.component.css']
})
export class C9ratingioComponent implements OnInit {

  constructor() { }

@Input()
prodRating:number;
// category: any;

@Output()
uRatingCount=new EventEmitter();

CountRatingFun(prodRating:any){
alert("hello "+ prodRating);
//console.log(prodRating);
this.uRatingCount.emit(prodRating);
}
  ngOnInit() {
  }

}
