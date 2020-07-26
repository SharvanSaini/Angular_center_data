import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-c7rating',
  templateUrl: './c7rating.component.html',
  styleUrls: ['./c7rating.component.css']
})
export class C7ratingComponent implements OnInit {

  constructor() { }
  
  @Input()
  prodRating:number;
  
  ngOnInit() {
  }

}
