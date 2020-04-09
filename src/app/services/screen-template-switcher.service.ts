import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Video } from "../dataMods/Video";

@Injectable({
  providedIn: 'root'
})
export class ScreenTemplateSwitcherService {

  // 0 -> main screen
  // 1 -> video viewing screen
  videoRelatedTemplates : BehaviorSubject<number>;

  videoObject : BehaviorSubject<Video>;

  constructor() { 
    this.videoRelatedTemplates = new BehaviorSubject<number>(0);
    this.videoObject = new BehaviorSubject<Video>( null );
  }

  setVideoTemplate( value ){
    this.videoRelatedTemplates.next( value );
  }

  getVideoTemplate() : Observable<number>{ 
    return this.videoRelatedTemplates.asObservable();
  }


  setVideoObject( video:Video ) : void { 
    this.videoObject.next( video );
  }
  getVideoObject() : Observable<Video>{ 
    return this.videoObject.asObservable();
  }


}
