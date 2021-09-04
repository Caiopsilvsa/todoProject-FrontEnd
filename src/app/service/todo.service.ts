import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../model/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient, private snack:MatSnackBar ) { }
   baseUrl='https://app-todo-application.herokuapp.com/todos/';
    
  findAll(): Observable<Todo[]>
  {
        
        return this.http.get<Todo[]>(this.baseUrl)

  }

      


  create(todo:Todo):Observable<Todo>{
  
   return this.http.post<Todo>(this.baseUrl, todo)

  }

  delete(id:any):Observable<void>{
   const deleteUrl = `${this.baseUrl}/${id}` 
   return this.http.delete<void>(deleteUrl)

  }

  finished(todo:Todo):Observable<Todo>{
    const finishedUrl = `${this.baseUrl}/${todo.id}`
    return this.http.put<Todo>(finishedUrl,todo)
  }

   message(msg:string):void{
     this.snack.open(msg,'ok',{
       horizontalPosition:'end',
       verticalPosition:'top',
       duration: 4000
     })
      
     

   }

}
