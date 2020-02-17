import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/cursos.service';
import { Cursos } from 'src/app/curso';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-edit',
  templateUrl: './cursos-edit.component.html',
  styleUrls: ['./cursos-edit.component.css']
})
export class CursosEditComponent implements OnInit {
  curso:Cursos
  id:number
  constructor(private cursoService:CursosService, 
    private rota:ActivatedRoute) { }

  ngOnInit() {
   this.rota.params.subscribe(
     (param:any)=>this.id = param['id']
   );
   this.cursoService.retriveById(this.id).subscribe({
     next: course=>this.curso = course,
     error: err=>console.log('erro')
   }
     
   )
  }

  salve(){
    this.cursoService.save(this.curso).subscribe({
      next:curso=>console.log(curso)
    })
  }
}
