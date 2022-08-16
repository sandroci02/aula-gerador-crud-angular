import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PageData } from '../model/pageData.model';
import { ParametroData } from '../model/parametroData.model';
import { ReturnData } from '../model/returnData.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getList(base: string, parametro: ParametroData) {    
    return this.http.post<PageData>(environment.apiPrefix + base + '/list', parametro);
  }

  getListAll(base: string){
    return this.http.get<[]>(environment.apiPrefix + base + '/listAll');
  } 

  getDetalhe(base: string, id: Number) {
    return this.http.get<ReturnData>(environment.apiPrefix + base + '/find/'+ id);
  }  

  save(base: string, objeto: any) {
      return this.http.post<PageData>(environment.apiPrefix + base + '/save', objeto);
  }

  update(base: string, objeto: any) {
      return this.http.put<PageData>(environment.apiPrefix + base + '/update', objeto);
  }  

  excluir(base: string, id: Number) {
    return this.http.delete<PageData>(environment.apiPrefix + base + '/delete/'+id);
  }
}
