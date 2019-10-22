import {Component, Input, OnInit} from '@angular/core';
import {TaskApiService} from '../task-api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: any;
  constructor(private taskApi: TaskApiService) { }

  deleteTask() {
    this.taskApi.deleteTask(this.task.id).subscribe(
      data => {

      }
    );
  }

  ngOnInit() {
  }

}
