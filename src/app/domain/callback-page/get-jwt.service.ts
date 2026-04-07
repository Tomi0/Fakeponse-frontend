import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { JwtToken } from './JwtToken.model';

@Injectable({
  providedIn: 'root',
})
export class GetJwtService {

  constructor(protected http: HttpClient) {}

  public __invoke(code: string): Observable<JwtToken> {
    return this.http.get<JwtToken>(environment.url + '/users/token', {
      params: { code: code },
    });
  }

}
