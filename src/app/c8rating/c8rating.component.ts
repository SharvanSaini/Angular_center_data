import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-c8rating',
  templateUrl: './c8rating.component.html',
  styleUrls: ['./c8rating.component.css']
})
export class C8ratingComponent implements OnInit {

  constructor() { }
  @Input()
  category: any;
  prodRating:number;
  ngOnInit() {
  }

}
