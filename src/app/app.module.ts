import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import {HttpModule} from '@angular/http';
import {HttpClientModule,HttpEventType} from '@angular/common/http';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5pipeComponent } from './c5pipe/c5pipe.component';
import { C5asyncComponent } from './c5async/c5async.component';
//import { C6customComponent } from './c6custom/c6custom.component';
import { CustomPipe,CustomJSONPipe,FilterPipe } from './pipes/custom.pipe';
import { C7prodComponent } from './c7prod/c7prod.component';
import { C7ratingComponent } from './c7rating/c7rating.component';
import { C8ratingComponent } from './c8rating/c8rating.component';
import { C8prodComponent } from './c8prod/c8prod.component';
import { C9prodioComponent } from './c9prodio/c9prodio.component';
import { C9ratingioComponent } from './c9ratingio/c9ratingio.component';
import { C10ratingioComponent } from './c10ratingio/c10ratingio.component';
import { C10prodioComponent } from './c10prodio/c10prodio.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { from } from 'rxjs';

import { C11catComponent } from './c11cat/c11cat.component';
import { C11prodComponent } from './c11prod/c11prod.component';
import { C12adminComponent } from './c12admin/c12admin.component';
import { AirlinesComponent } from './c12admin/airlines/airlines.component';
import { FlightsComponent } from './c12admin/flights/flights.component';
import { ViewuserComponent } from './c12admin/viewuser/viewuser.component';
import { C13dashboardComponent } from './c13dashboard/c13dashboard.component';
import { C13infoComponent } from './c13dashboard/c13info/c13info.component';
import { C13panelComponent } from './c13dashboard/c13panel/c13panel.component';
import { C14tdfComponent } from './c14tdf/c14tdf.component';
import { C14tdfvalComponent } from './c14tdfval/c14tdfval.component';
import { C15reactiveComponent } from './c15reactive/c15reactive.component';
import { C16empformComponent } from './c16empform/c16empform.component';
import { C17displayComponent } from './c17display/c17display.component';

import { ImageuploadComponent } from './imageupload/imageupload.component';
import { HomeBeh1Component } from './home-beh1/home-beh1.component';
import { HomeBeh2Component } from './home-beh2/home-beh2.component';
import { HomeBeh3Component } from './home-beh3/home-beh3.component';
import { HomeBeh4Component } from './home-beh4/home-beh4.component';
import { ImageComponent } from './image/image.component';
import { ImagegalleryComponent } from './imagegallery/imagegallery.component'; 
//import { FormArraysComponent } from './form-arrays/form-arrays.component';
//import { LazyComponent } from './lazy/lazy.component';







@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5pipeComponent,
    C5asyncComponent,
   // C6customComponent,
    CustomPipe,
    CustomJSONPipe,
    FilterPipe,
    C7prodComponent,
    C7ratingComponent,
    C8ratingComponent,
    C8prodComponent,
    C9prodioComponent,
    C9ratingioComponent,
    C10ratingioComponent,
    C10prodioComponent,
    HomeComponent,
    ProductsComponent,
    DashboardComponent,
    UserComponent,
    C11catComponent,
    C11prodComponent,
    C12adminComponent,
    AirlinesComponent,
    FlightsComponent,
    ViewuserComponent,
    C13dashboardComponent,
    C13infoComponent,
    C13panelComponent,
    C14tdfComponent,
    C14tdfvalComponent,
    C15reactiveComponent,
    C16empformComponent,
    C17displayComponent,
  
    ImageuploadComponent,
    HomeBeh1Component,
    HomeBeh2Component,
    HomeBeh3Component,
    HomeBeh4Component,
    ImageComponent,
    ImagegalleryComponent,
    // FormArraysComponent,
    //LazyComponent,
   
   
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpModule,
    HttpClientModule,
    
    RouterModule.forRoot(

      [
        {path:'home',component:HomeComponent},
        {path:'user',component:C3Component},
        //{path:'dashboard',component:C6customComponent},
        {path:'products',component:C7prodComponent},
        {path:'categories',component:C11catComponent},
        {path:'tdf',component:C14tdfComponent},
        {path:'tdfval',component:C14tdfvalComponent},
        {path:'reactive',component:C15reactiveComponent},
        {path:'empform',component:C16empformComponent},
        {path:'empSelect',component:C17displayComponent},
       
        //with querystring
        //{path:'ProdInfo',component:C11prodComponent},
        // without querystring
        {path:'ProdInfo/:id',component:C11prodComponent},
         //
        {path:'admin',component:C12adminComponent,children:
        [
        {path:'airlines',component:AirlinesComponent},
        {path:'flights',component:FlightsComponent},
        {path:'viewusers',component:ViewuserComponent}
        ]},
        
         {path:'NewDashboard',component:C13dashboardComponent,children:
         [
         {path:'info/:id',component:C13infoComponent,outlet:'rinfo'},
         {path:'panel',component:C13panelComponent,outlet:'rpanel'},
         ]},

         {path: 'LazyloadingModule', loadChildren: () => import('../app/lazyloading/lazyloading.module').then(m => m.LazyloadingModule)},
        // {path: 'Lazy', loadChildren: '../app/lazy/lazy.module#Lazy'},
        //{path:'Lazy',component:LazyComponent},
        {path: 'Lazy', loadChildren: () => import('../app/lazy/lazy.module').then(m => m.LazyModule)},
        
      //  {path:'formArray',component:FormArraysComponent},
       {path:'image',component:ImageuploadComponent},
        {path:'imagegallery',component:ImagegalleryComponent},
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor()
  {
    console.log("AppComponent loaded");
  }
 }
