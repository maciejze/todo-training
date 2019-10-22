import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoListRoutingModule} from './todo-list-routing.module';
import {MyListComponent} from './my-list/my-list.component';
import {TaskComponent} from './task/task.component';
import {HttpClientModule} from '@angular/common/http';
import {TaskApiService} from './task-api.service';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';

@NgModule({
  declarations: [MyListComponent, TaskComponent, AddTaskFormComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    TaskApiService
  ]
})
export class TodoListModule {}
