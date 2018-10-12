import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TelaBuscaComponent } from './tela-busca/tela-busca.component';
import { FiltroBuscaPipe } from './filtro-busca.pipe';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConteudoCardComponent } from './tela-busca/conteudo-card/conteudo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaBuscaComponent,
    FiltroBuscaPipe,
    ConteudoCardComponent
  ],
  imports: [
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
