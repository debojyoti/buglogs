import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullScreenLoaderService {

  loaderSubject = new Subject<any>();

  constructor() { }

  public listenLoaderChanges() {
    return this.loaderSubject.asObservable();
  }

  public showLoader(loaderText = 'Loading') {
    console.log(loaderText);
    this.loaderSubject.next({
      isVisible: true,
      loaderText
    })
  }

  public hideLoader() {
    this.loaderSubject.next({
      isVisible: false
    })
  }
}
