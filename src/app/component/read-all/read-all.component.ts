import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  
list:Todo[]=[];

  

  constructor(private service:TodoService) { }

  ngOnInit(): void {
    console.log(this.findAll());
  }

   
   findAll():void
   {

      this.service.findAll().subscribe((resposta)=>{this.list=resposta});

   }


}
