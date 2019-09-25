import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'dm-pesquisa-cliente',
  templateUrl: './pesquisa-cliente.component.html',
  styleUrls: ['./pesquisa-cliente.component.css']
 
})
export class PesquisaClienteComponent implements OnInit {

   clientes: Cliente []

   clientes$: Observable<Cliente[]>;
  

  constructor(private clienteService:ClienteService) { }

  ngOnInit() {    

    //  this.clienteService.getClientes()
    // .subscribe(data => this.clientes = data);

    this.clientes$ = this.clienteService.getClientes();

  }

}
