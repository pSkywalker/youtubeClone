import { Component, OnInit } from '@angular/core';
import { Video } from "../dataMods/Video";
import { ScreenTemplateSwitcherService } from '../services/screen-template-switcher.service'; 

import { Router } from "@angular/router";

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {

  video: Video;
  videoPlayer;

  constructor(
    private screenTemplateSwitcherService: ScreenTemplateSwitcherService,
    private router: Router
  ) {
    this.videoPlayer = false;
    // store in cookie? -> when refreshing the page, 
    this.video = new Video();
    this.video.video = "../../assets/imgs/videoPlaceholder.png";
    this.video.videoPicture = "../../assets/imgs/videoThumbnail.png";
    this.video.videoName = "Best Music for coding";
    this.video.profilePicture = "../../assets/imgs/profileThumbnail.png";
    this.video.videoLength = "4:00";
    this.video.contentCreator = "Username";
    this.video.amountOfViews = 13200000;
    let date = new Date() ;
    date.setFullYear(2019);
    this.video.whenItWasPosted = date;

    this.screenTemplateSwitcherService.getVideoTemplate().subscribe( data => { 
      this.videoPlayer = data;
    });

  }

  ngOnInit(): void {
  }


  viewVideo(){ 
    this.screenTemplateSwitcherService.setVideoObject( this.video );
    this.screenTemplateSwitcherService.setVideoTemplate( true );
    this.router.navigate([ "playVideo" ]);
  }


}
