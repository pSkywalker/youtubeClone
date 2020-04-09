import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { NavigationBarService } from "../services/navigation-bar.service";
import { UploadBoxService } from "../services/upload-box.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private navigationBarService:NavigationBarService,
    private uploadBoxService: UploadBoxService
  ) { }

  ngOnInit(): void {
  }

  changeNavView(){ 
    this.navigationBarService.changeView();
  }

  home(){ 
    this.router.navigate( [ "/" ] );
  }

  upload(){ 
    this.uploadBoxService.changeUploadBox();
  }

  youtubeApps(){ 

  }

  settings(){ 

  }

}
