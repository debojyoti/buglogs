import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(
    private http: HttpClient
  ) { }

  public getRequest(url,params) : Observable<any> {
    return this.http.get(
      url,
      {
        params : params
      }
    )
  }

  public postRequest(url, params) : Observable<any> {
    return this.http.post(
      url,
      {
        params : params
      }
    )
  }

}