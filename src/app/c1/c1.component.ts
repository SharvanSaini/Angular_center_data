import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  username:string='rohan';
logourl:string='../../assets/images/u3.jpg';
btn:boolean=false;
imgchange:boolean=true;
unm:string='sharvan';
  constructor() { }

  ngOnInit() {
  }
changeFun(){
this.username='sohan';
this.imgchange=!this.imgchange;
if(this.imgchange)
{
  this.logourl='../../assets/images/u3.jpg';

}
else{
  this.logourl='../../assets/images/c1.jpg'
}



}




}
