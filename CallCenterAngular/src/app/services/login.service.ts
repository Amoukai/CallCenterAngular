import { Login } from '../models/login.model';
import { ErResult } from '../models/er-result.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import constant from 'src/assets/json/systemConstent.json';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private client: HttpClient) {}

  login(model: Login): Observable<ErResult<User>> {
    const url: string = constant.apiUri + constant.loginUrl;
    return this.client.post<ErResult<User>>(url, model);
  }
}
