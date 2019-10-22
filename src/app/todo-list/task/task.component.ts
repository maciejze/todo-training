import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskApiService} from '../task-api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: any;
  @Output() emitFetchTasks = new EventEmitter();
  constructor(private taskApi: TaskApiService) { }

  deleteTask() {
    this.taskApi.deleteTask(this.task.id).subscribe(
      next => {
        this.emitFetchTasks.emit('task deleted');
      }
    );
  }

  ngOnInit() {
  }

}
