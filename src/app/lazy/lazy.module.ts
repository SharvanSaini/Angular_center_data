import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';


@NgModule({
  declarations: [
    LazyComponent,
    LazyloadComponent,

  
  ],
  imports: [
    CommonModule,
    LazyRoutingModule

  ],
  providers: [],
  bootstrap: [LazyComponent]
})
export class LazyModule { 

  constructor()
  { 
    console.log("Lazy");
  }
}
