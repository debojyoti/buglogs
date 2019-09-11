import { Component, OnInit } from '@angular/core';
import { FullScreenLoaderService } from './../../../services/full-screen-loader.service';

@Component({
  selector: 'full-screen-loader',
  templateUrl: './full-screen-loader.component.html',
  styleUrls: ['./full-screen-loader.component.scss']
})
export class FullScreenLoaderComponent implements OnInit {

  loaderProperties: any = {
    isVisible: false,
    loaderText: 'Loading'
  }

  constructor(private fullScreenLoaderService: FullScreenLoaderService) { }

  ngOnInit() { 
    this.fullScreenLoaderService
      .listenLoaderChanges()
      .subscribe(updatedProperties => {
        this.loaderProperties = updatedProperties;
      })
  }

}
