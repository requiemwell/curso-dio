import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { RouterModule } from '@angular/router';


import { ReplacePipe } from './pipe/replace.pipe';
import { CursosComponent } from './cursos/cursos.component';
import { Error404Component } from './error404/error404.component';
import { CursoInfoComponent } from './cursos/curso-info/curso-info.component';


@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    ReplacePipe,
    CursosComponent,
    Error404Component,
    CursoInfoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'cursos', pathMatch:'full'},
      {path:'cursos/info/:id',component:CursoInfoComponent},
      {path:'cursos', component:CursosComponent},
      {path:'**', component:Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
