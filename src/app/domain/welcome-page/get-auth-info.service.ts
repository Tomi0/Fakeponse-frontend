import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetAuthInfoService {
  constructor(private http: HttpClient) {}

  public __invoke(): Observable<any> {
    return this.http.get(environment.url + '/auth');
  }
}
