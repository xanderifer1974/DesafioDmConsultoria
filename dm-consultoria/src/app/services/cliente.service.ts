import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Cliente } from '../model/cliente.model'

import { DM_API } from '../app.api'
import { DetalheCliente } from '../model/detalhe-cliente.model'




@Injectable()
export class ClienteService {

  
  constructor(private _http: HttpClient) { }

  public getClientes() {

    return this._http.get<Cliente[]>(`${DM_API}/clientes`)

  }

  public getClientesById(id: string) {

    return this._http.get<Cliente[]>(`${DM_API}/clientes/${id}`)

  }

  public getDetalheClientesById(id: string) {

    return this._http.get<DetalheCliente[]>(`${DM_API}/detalhe-cliente/${id}`)

  }

  
}