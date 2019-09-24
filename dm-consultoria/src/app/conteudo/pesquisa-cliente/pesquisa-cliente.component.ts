import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'dm-pesquisa-cliente',
  templateUrl: './pesquisa-cliente.component.html',
  styleUrls: ['./pesquisa-cliente.component.css']
})
export class PesquisaClienteComponent implements OnInit {

  @Input() cliente: Cliente

  clientes: Cliente[] = [  
    {  
      id:1,
      nome:"Paulo Santos de Almeida",
      email:"paulo.santos@email.com",
      cpf:"02341233409"
    },
    {  
      id:2,
      nome:"Antonio Marques da Silva",
      email:"tonhomsilva@email.com",
      cpf:"23456789012"
    },
    {  
      id:3,
      nome:"João Sousa Siqueira",
      email:"jaosiq@email.com",
      cpf:"34567890123"
    },
    {  
      id:4,
      nome:"Armando Jogada",
      email:"armando.player@gmail.com",
      cpf:"45678901234"
    },
    {  
      id:5,
      nome:"Jordência Sexta",
      email:"jordanfriday@hotmail.com",
      cpf:"56789012345"
    },
    {  
      id:6,
      nome:"Kelly Guissa",
      email:"salsich@obig.net",
      cpf:"67890123456"
    },
    {  
      id:7,
      nome:"Alexandre R. Ferreira",
      email:"xanderifer1974@gmail.com",
      cpf:"04436823725"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
