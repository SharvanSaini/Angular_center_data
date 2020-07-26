import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadingfirstcomponentComponent } from './lazyloadingfirstcomponent/lazyloadingfirstcomponent.component';
import { LazyloadingComponent } from './lazyloading.component';


const lazyloadingRoutes: Routes = [


    {
        path: '', component: LazyloadingComponent, children: [
            {path: 'lazyloadingfirstcomponent', component: LazyloadingfirstcomponentComponent}
        ]
    }

]; 


@NgModule({
    imports: [RouterModule.forChild(lazyloadingRoutes)],
    exports: [RouterModule]
  })

export class LazyloadingRoutingModule { }
