import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadingfirstcomponentComponent } from './lazyloadingfirstcomponent/lazyloadingfirstcomponent.component';
import { LazyloadingComponent } from './lazyloading.component';
import { LazyloadingRoutingModule } from './lazyloading-routing.module';




@NgModule({
  declarations: [
    LazyloadingfirstcomponentComponent,
    LazyloadingComponent
  ],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ],
  providers: [],
  bootstrap: [LazyloadingComponent]
})
export class LazyloadingModule {
  constructor()
  { 
    console.log("LazyLoadingModule loaded");
  }
 }
