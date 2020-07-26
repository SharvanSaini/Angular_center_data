import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home-beh3',
  templateUrl: './home-beh3.component.html',
  styleUrls: ['./home-beh3.component.css']
})
export class HomeBeh3Component implements OnInit {

  constructor(private appService : AppService) {

    this.appService.userName.subscribe(uname=>{
      this.userName=uname;
    })
   }

  ngOnInit() {
  }
 // userName:string="Ram";
 userName;
  updateUserName(uname){
    //this.userName = uname.value
   this.appService.userName.next(uname.value)
   }
}
