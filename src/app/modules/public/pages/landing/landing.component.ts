import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from './../../../../services/http-calls.service';
import { AuthManagerService } from '../../../../services/auth-manager.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private httpCallsService: HttpCallsService,
    private authManagerService: AuthManagerService
  ) { }

  ngOnInit() { }


  _loginWithGoogle() {
    this.authManagerService.loginWithGoogle()
      .then(res => {
        console.log('Logged in successfully!');
      }).catch(err => {
        
      })
  }
}
