import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home-beh2',
  templateUrl: './home-beh2.component.html',
  styleUrls: ['./home-beh2.component.css']
})
export class HomeBeh2Component implements OnInit {

  constructor(private appService : AppService) {

    this.appService.userName.subscribe(uname=>{
      this.userName=uname;
    })
   }

  ngOnInit() {
  }
  //userName:string="Ram";
  userName;
  updateUserName(uname){
    //this.userName = uname.value
   this.appService.userName.next(uname.value)
   }
}
