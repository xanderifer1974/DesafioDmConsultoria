import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { PesquisaClienteComponent } from './conteudo/pesquisa-cliente/pesquisa-cliente.component';
import { DetalheClienteComponent } from './conteudo/detalhe-cliente/detalhe-cliente.component';
import { DetalheClienteTransacaoComponent } from './conteudo/detalhe-cliente/detalhe-cliente-transacao/detalhe-cliente-transacao.component';
import { FooterComponent } from './footer/footer.component';
import { DadosCadastroClienteComponent } from './conteudo/dados-cadastro-cliente/dados-cadastro-cliente.component';
import { ClienteService } from './services/cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    NavBarComponent,
    ConteudoComponent,
    PesquisaClienteComponent,
    DetalheClienteComponent,
    DetalheClienteTransacaoComponent,
    FooterComponent,
    DadosCadastroClienteComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
