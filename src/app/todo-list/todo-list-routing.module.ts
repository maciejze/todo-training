import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyListComponent} from './my-list/my-list.component';


const routes: Routes = [{
  path: 'my-list',
  component: MyListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
