import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'dm-pesquisa-cliente',
  templateUrl: './pesquisa-cliente.component.html',
  styleUrls: ['./pesquisa-cliente.component.css']
 
})
export class PesquisaClienteComponent implements OnInit {

  public clientes: Cliente []
  

  constructor(private clienteService:ClienteService) { }

  ngOnInit() {    

    this.clientes =this.clienteService.getClientes();
  }

}
