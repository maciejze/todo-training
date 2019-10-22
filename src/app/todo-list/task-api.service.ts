 import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {

  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  fetchTasks() {
    return this.httpClient.get(this.apiUrl + '/tasks');
  }

  deleteTask(id) {
    return this.httpClient.delete(this.apiUrl + '/tasks/' + id);
  }

  addTask(task) {
    return this.httpClient.post(this.apiUrl + '/tasks', task);
  }
}
