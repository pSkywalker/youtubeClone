import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  errorMsg;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.errorMsg = false;
   }

  ngOnInit(): void {
  }

  login(){ 
    //this.errorMsg = true;
    this.router.navigate(["/"]);
  }

  signUp(){ 
    this.authService.updateAuthMode( 1 );
  }

}
