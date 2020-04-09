import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SignInButtonComponent } from './sign-in-button/sign-in-button.component';
import { MiniNavigationBarComponent } from './mini-navigation-bar/mini-navigation-bar.component';
import { UploadBoxComponent } from './upload-box/upload-box.component';
import { AdBoxComponent } from './ad-box/ad-box.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { ViewsPipe } from './pipes/views.pipe';
import { DataFormatterVideoPostedPipe } from './pipes/data-formatter-video-posted.pipe';
import { AuthComponent } from './auth/auth.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { VideoScreenComponent } from './video-screen/video-screen.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationBarComponent,
    SignInButtonComponent,
    MiniNavigationBarComponent,
    UploadBoxComponent,
    AdBoxComponent,
    VideoThumbnailComponent,
    ViewsPipe,
    DataFormatterVideoPostedPipe,
    AuthComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    VideoScreenComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
