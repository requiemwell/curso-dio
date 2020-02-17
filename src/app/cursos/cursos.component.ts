import { Component, OnInit } from '@angular/core';
import { Cursos } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos:Cursos[];
  filtrado:Cursos[] = [];

  filterBy:string;
  constructor(private cursosService:CursosService){}
  ngOnInit(){
    //this.cursos = this.cursosService.getCursos();
    this.retriveAll()
    //this.filtrado = this.cursos
  }
  // metodo para trazer os cursos da classe de serviço
  retriveAll(){
    this.cursosService.retriveAll().subscribe({
      next:curso=>{
        this.cursos = curso;
        this.filtrado = this.cursos
      },
      error:err=> console.log(err + 'erro no servidor')
    })
  }

  set filtro(value:string){
    this.filterBy = value;
    this.cursos = this.filtrado.filter(
      (curso:Cursos)=>curso.name.toLowerCase().indexOf(this.filterBy.toLowerCase()) > -1
    )
  }
  get filtro(){
    return this.filterBy
  } 
  
}
