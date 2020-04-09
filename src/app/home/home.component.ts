import { Component, OnInit } from '@angular/core';

import { NavigationBarService } from "../services/navigation-bar.service";
import { UploadBoxService } from "../services/upload-box.service";
import { ScreenTemplateSwitcherService } from "../services/screen-template-switcher.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navView;
  showUpload;

  constructor(
    private navigationBarService:NavigationBarService,
    private uploadBoxService: UploadBoxService,
    private screenTemplateSwitcherService: ScreenTemplateSwitcherService
  ) { 
  
    this.navView = 1;
    this.showUpload = false;

    this.screenTemplateSwitcherService.setVideoTemplate(false);
    this.navigationBarService.getView().subscribe( data => {
      this.navView = data;
    });
    this.uploadBoxService.getUpload().subscribe( data => { 
      this.showUpload = data;
    });

  }

  ngOnInit(): void {
  }

}
