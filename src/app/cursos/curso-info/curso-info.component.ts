import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-info',
  templateUrl: './curso-info.component.html',
  styleUrls: ['./curso-info.component.css']
})
export class CursoInfoComponent implements OnInit,OnDestroy {

  cursoId:number; 
  inscricao:Subscription

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (param:any)=> this.cursoId = param['id']
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

}
