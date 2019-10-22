import { Component, OnInit } from '@angular/core';
import {TaskApiService} from '../task-api.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  taskList: any;

  constructor(private taskApi: TaskApiService) { }

  ngOnInit() {

    this.taskApi.fetchTasks().subscribe(data => {
      console.log(data);
      this.taskList = data;
    });

  }

}
