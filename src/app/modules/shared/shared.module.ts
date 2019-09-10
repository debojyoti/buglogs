import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../../app.config';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../interceptors/token-interceptor.service';
import { HttpCallsService } from './../../services/http-calls.service';
import { ConnectorService } from './../../services/connector.service';
import { AuthManagerService } from './../../services/auth-manager.service';
import { FullScreenLoaderComponent } from './full-screen-loader/full-screen-loader.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    AngularFireAuthModule
  ],
  providers: [
    TokenInterceptorService, 
    HttpCallsService,
    AuthManagerService, 
    ConnectorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class SharedModule { }
