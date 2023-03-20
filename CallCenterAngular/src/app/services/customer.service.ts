import { StBasicVm } from './../models/st-basic-vm.model';
import  constant  from 'src/assets/json/systemConstent.json';
import { ErResult } from './../models/er-result.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client: HttpClient) {   }

  search(model:object):Observable<ErResult<StBasicVm>>{
    const url: string = constant.apiUri + constant.customerSearchUrl;
    return this.client.post<ErResult<StBasicVm>>(url, model);
  }

}
