import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';
import { servicesVersion } from 'typescript';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router:Router, private service:TodoService) { }
  
  createdTodo : Todo ={
    finalizacao : false,
    DataParaFinalizar : new Date(),
    descricao: ''

  };

  ngOnInit(): void {
  }

   
  create(){
    this.formataData()
    this.service.create(this.createdTodo).subscribe((resposta) => 
    {this.router.navigate([''])
     this.service.message("Criado com sucesso!")
    })
     
  } 

  formataData():void{
    let data = new Date(this.createdTodo.DataParaFinalizar)
           this.createdTodo.DataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} `

  }

   cancel():void{
     this.router.navigate([''])
   }

   



}
