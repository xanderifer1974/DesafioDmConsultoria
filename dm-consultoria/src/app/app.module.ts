import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { PesquisaClienteComponent } from './conteudo/pesquisa-cliente/pesquisa-cliente.component';
import { DetalheClienteComponent } from './conteudo/detalhe-cliente/detalhe-cliente.component';
import { DetalheClienteTransacaoComponent } from './conteudo/detalhe-cliente/detalhe-cliente-transacao/detalhe-cliente-transacao.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    NavBarComponent,
    ConteudoComponent,
    PesquisaClienteComponent,
    DetalheClienteComponent,
    DetalheClienteTransacaoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
