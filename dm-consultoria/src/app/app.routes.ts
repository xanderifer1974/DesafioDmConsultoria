import {Routes} from '@angular/router';

import { PesquisaClienteComponent } from './conteudo/pesquisa-cliente/pesquisa-cliente.component';
import { DadosCadastroClienteComponent } from './conteudo/dados-cadastro-cliente/dados-cadastro-cliente.component';
import { ConteudoComponent } from './conteudo/conteudo.component';

export const ROUTES: Routes = [

    {path: '',component: ConteudoComponent,
     children: [
        {path:'', redirectTo: 'pesquisa-cliente', pathMatch: 'full'},
        {path: 'pesquisa-cliente',component: PesquisaClienteComponent},
        {path: 'dados-cliente',component: DadosCadastroClienteComponent}
        // {path: 'cliente/:id',component: DadosCadastroClienteComponent}
     ]}  

];
