import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { FullScreenLoaderService } from './services/full-screen-loader.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [FullScreenLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
