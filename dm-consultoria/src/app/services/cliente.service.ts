import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Cliente } from '../model/cliente.model'

import { DM_API } from '../app.api'




@Injectable()
export class ClienteService {

  private readonly apiUrl = `${DM_API}/clientes`

  constructor(private _http: HttpClient) { }

  public getClientes() {

    return this._http.get<Cliente[]>(this.apiUrl)

  }
}