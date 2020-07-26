import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-c13info',
  templateUrl: './c13info.component.html',
  styleUrls: ['./c13info.component.css']
})
export class C13infoComponent implements OnInit {

  catid: number;
  constructor(private activatedRoute: ActivatedRoute)
  {
    
     this.activatedRoute.params.subscribe(d => {
       console.log(d);
       this.catid=d['id'];
     alert(this.catid);
     })
  }

  categories: any[] = [
    {id: 1, name: 'laptop' , desc: 'description', img: 'l1.jpg'},
    {id: 2, name: 'mobile' , desc: 'description', img: 'm1.jpg'},
    {id: 3, name: 'shoes' , desc: 'description', img: 's1.jpeg'},
    {id: 4, name: 'clothes' , desc: 'description', img: 'c1.jpg'}

   ];

  ngOnInit() {
  }

}