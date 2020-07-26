import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-c15reactive',
  templateUrl: './c15reactive.component.html',
  styleUrls: ['./c15reactive.component.css']
})
export class C15reactiveComponent implements OnInit {

  rform: FormGroup;
  constructor(private fb:FormBuilder) { }

  // constructor() { }

  ngOnInit()
  {
    this.rform=this.fb.group(
      {
        "name":[null,Validators.required],
        "description":[null,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])]
      }
    );
  }

  addPost(data)
  {
    console.log(data);
  }

}