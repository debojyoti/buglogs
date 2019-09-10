import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { FullScreenLoaderComponent } from './../shared/full-screen-loader/full-screen-loader.component';
@NgModule({
  declarations: [LandingComponent, FullScreenLoaderComponent],
  imports: [
  
  CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
