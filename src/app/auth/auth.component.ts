import { Component, OnInit } from '@angular/core';

import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authMode;
  
  constructor(
    private authService: AuthService
  ) {
    this.authMode = 0;

    this.authService.getAuthMode().subscribe( data => { 
      this.authMode = data;
    });

   }


  ngOnInit(): void {
  }



}


