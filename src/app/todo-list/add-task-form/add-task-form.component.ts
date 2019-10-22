import { Component, OnInit } from '@angular/core';
import {TaskApiService} from '../task-api.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {

  model = { name: '', description: ''};

  constructor(private taskApi: TaskApiService) {
  }

  addTask() {
    console.log(this.model);
    this.taskApi.addTask(this.model).subscribe( next => {
      console.log('udalo sie dodac zadanie');
    });
  }

  ngOnInit() {
  }

}
