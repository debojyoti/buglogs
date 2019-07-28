import { Injectable } from '@angular/core';
import { BASE_URL, cloudFunctionsBaseURL } from '../app.config';
import { ConnectorService } from './connector.service';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(
    private connectorService: ConnectorService
  ) { }

  exchangeAuthTokenFromFirebase(googleToken) {
    return new Promise((resolve, reject) => {
      this.connectorService.postRequest(cloudFunctionsBaseURL+'/exchangeAuthToken', {
        googleToken
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err)
      })
    })
  }
}
