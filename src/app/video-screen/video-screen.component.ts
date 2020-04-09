import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ScreenTemplateSwitcherService } from '../services/screen-template-switcher.service'; 

import { Video } from "../dataMods/Video";

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.css']
})
export class VideoScreenComponent implements OnInit {

  video:Video;

  constructor(
    private screenTemplateSwitcherService : ScreenTemplateSwitcherService,
    private router: Router
  ) { 
    this.screenTemplateSwitcherService.getVideoObject().subscribe( data => { 
      if( data == null ) {
        this.router.navigate( ["/"] );
      }
      this.video = data;
    });
  }

  ngOnInit(): void {
  }

}
