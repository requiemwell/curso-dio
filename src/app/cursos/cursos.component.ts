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
    this.cursos = this.cursosService.getCursos();
    this.filtrado = this.cursos
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
