import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyListComponent} from './my-list/my-list.component';
import {AddTaskFormComponent} from './add-task-form/add-task-form.component';


const routes: Routes = [{
  path: 'my-list',
  component: MyListComponent
}, {
  path: 'add-task',
  component: AddTaskFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
