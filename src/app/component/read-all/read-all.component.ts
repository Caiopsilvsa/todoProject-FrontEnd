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

   finished(todo:Todo):void{
       this.service.finished(todo).subscribe( ()=>{
         this.service.message("Atividade finalizada!!");
         this.list = this.list.filter(result => result.id !==todo.id )
       })

   }
  
   delete(id: any):void{
     this.service.delete(id).subscribe(result =>{
      this.service.message("Deletado com sucesso!") 
      this.list = this.list.filter(todo=> todo.id !==id)
     })

   }

}
