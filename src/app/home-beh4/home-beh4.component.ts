import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home-beh4',
  templateUrl: './home-beh4.component.html',
  styleUrls: ['./home-beh4.component.css']
})
export class HomeBeh4Component implements OnInit {

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
