import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AppService} from "../app.service";

@Component({
  selector: 'app-c17display',
  templateUrl: './c17display.component.html',
  styleUrls: ['./c17display.component.css']
})
export class C17displayComponent implements OnInit {


  constructor(private activateRoute: ActivatedRoute,private appService: AppService,private router: Router)
  {
    
  }

  ngOnInit() {
    this.getAllEmps();
  }

  empList: any=[];
  //Method for getting all category on main page
  getAllEmps()
  {
    this.appService.getAllEmps().subscribe(data=>{
      this.empList=data.empList;
      // this.empList=data.response;
      // this.empList=data;
      console.log("data is :"+data);
      console.log(this.empList);
    },error=>{
      console.log('error');
    });
  }

}
