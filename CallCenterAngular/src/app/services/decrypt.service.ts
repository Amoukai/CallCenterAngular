import { Observable } from 'rxjs';
import { ErResult } from '../models/er-result.model';
import { HttpClient } from '@angular/common/http';
import constant from 'src/assets/json/systemConstent.json';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DecryptService {
  constructor(private client: HttpClient) {}

  decrypt(data: string): Observable<ErResult> {
    const url = constant.apiUri + constant.decryptUrl;
    return this.client.post<ErResult>(url, { data: data });
  }
}
