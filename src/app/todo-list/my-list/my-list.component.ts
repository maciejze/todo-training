import {Component, OnInit} from '@angular/core';
import {TaskApiService} from '../task-api.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  taskList: any;
  isLoading: boolean;

  constructor(private taskApi: TaskApiService) { }

  ngOnInit() {
    this.fetchTasks({});

  }

  fetchTasks(event) {
    this.isLoading = true;
    this.taskApi.fetchTasks().subscribe(data => {
      this.taskList = data;
      this.isLoading = false;
    });
  }

}
