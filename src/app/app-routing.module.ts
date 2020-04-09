import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { VideoScreenComponent } from "./video-screen/video-screen.component";


const routes: Routes = [
  {  path: "", component: HomeComponent },
  {  path: "Auth", component: AuthComponent },
  {  path: "playVideo", component: VideoScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
