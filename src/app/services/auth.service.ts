import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../dataMods/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authMode:BehaviorSubject<number>;
  
  sessionKey: BehaviorSubject<String>;
  user: BehaviorSubject<User>;

  constructor() { 
    this.authMode = new BehaviorSubject<number>(0);
  }

  updateAuthMode(value){ 
    this.authMode.next( value );    
  }

  getAuthMode(): Observable<number>{ 
    return this.authMode.asObservable();
  }

}
