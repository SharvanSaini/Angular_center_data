import { Component, OnInit } from '@angular/core';
//import {Promise} from '@angular/core';
@Component({
  selector: 'app-c5async',
  templateUrl: './c5async.component.html',
  styleUrls: ['./c5async.component.css']
})
export class C5asyncComponent implements OnInit {
  username:any="Sharvan";
  constructor() { 
var promiseObj=new Promise(
  function(resolve,reject)
  {
    setTimeout(()=>{
      resolve("username");
    },2000);
  }
);

this.username=promiseObj.then(
  function(result:any)
  {

    // resolve
 console.log("result is"+result);
 return result;
  }
).catch (function (err1:any){
console.log("error is"+err1);
return err1;


});


  }

  ngOnInit() {
  }

}
