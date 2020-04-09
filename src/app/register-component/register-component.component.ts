import { Component, OnInit } from '@angular/core';

import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){ 
    this.authService.updateAuthMode( 0 );
  }

}
