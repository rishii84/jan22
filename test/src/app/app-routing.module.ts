import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyFirstComponent} from 'C:/Users/Rishi.Bhatia/test/src/app/components/my-first/my-first.component'

const routes: Routes = [
 { path: 'first', component: MyFirstComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
