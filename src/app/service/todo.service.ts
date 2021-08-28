import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
   baseUrl='https://app-todo-application.herokuapp.com/todos/';
    
  findAll(): Observable<Todo[]>
  {
        
        return this.http.get<Todo[]>(this.baseUrl)

  }


}
