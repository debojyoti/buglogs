import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from './../../../../services/http-calls.service';
import { AuthManagerService } from '../../../../services/auth-manager.service';
import { FullScreenLoaderService } from './../../../../services/full-screen-loader.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private httpCallsService: HttpCallsService,
    private authManagerService: AuthManagerService,
    private fullScreenLoaderService: FullScreenLoaderService,
    private toastr: ToastrService
  ) { }

  ngOnInit() { }


  _loginWithGoogle() {
    this.fullScreenLoaderService.showLoader('Logging you in');
    this.authManagerService.loginWithGoogle()
      .then(res => {
        console.log('Logged in successfully!');
        this.fullScreenLoaderService.hideLoader();
        this.toastr.success('Successfully Logged In', '', {
          positionClass: 'toast-bottom-right'
        });
      }).catch(err => {
        this.fullScreenLoaderService.hideLoader();
        this.toastr.error('Cancelled by user', '', {
          positionClass: 'toast-bottom-right'
        });
      })
  }
}
