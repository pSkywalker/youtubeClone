import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadBoxService {
  showUpload : BehaviorSubject<any>;
  
  constructor(
  ) {
    this.showUpload = new BehaviorSubject<any>( false );
   }

   
  getUpload() : Observable<any> { 
    return this.showUpload.asObservable();
  }

  changeUploadBox (  ) : void { 
    if( this.showUpload.value == true ){ 
      this.showUpload.next( false );
    }
    else{ 
      this.showUpload.next( true );
    }
  }

  upload(){ 

  }

}
