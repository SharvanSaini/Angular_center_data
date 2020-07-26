import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { LazyComponent } from './lazy.component';


const lazyloadRoutes: Routes = [


    {
        path: '', component: LazyComponent, children: [
            {path: 'lazyload', component: LazyloadComponent}
        ]
    }

]; 


@NgModule({
    imports: [RouterModule.forChild(lazyloadRoutes)],
    exports: [RouterModule]
  })

export class LazyRoutingModule { }
