import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormArray, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-form-arrays',
  templateUrl: './form-arrays.component.html',
  styleUrls: ['./form-arrays.component.css']
})
export class FormArraysComponent implements OnInit {

  
    formData: FormGroup;
    constructor(private fb:FormBuilder) { 
  this.formData = this.fb.group({
  firstName: [],
  lastName:[],
  address: this.fb.array([this.getaddress()])
  })
  
    }
  
    ngOnInit() {
    }
    get addressListArray(){
  return <FormArray>this.formData.get("address");
    }
  
    addAddress(){
  this.addressListArray.push(this.getaddress());
    }
  
    getaddress(){
      return this.fb.group({
        city: [],
        state:[],
        country:[]
      })
    }
    saveFormData(data){
      // 
      console.log("Form Array Data", data);
    }
    removeAddress(index: number){
  this.addressListArray.removeAt(index);
    }
  }
  