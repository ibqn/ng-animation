import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { AnimationBoxComponent } from './animation-box/animation-box.component';
import { MouseComponent } from './mouse/mouse.component';
import { ContainedComponent } from './contained/contained.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicsComponent,
    AnimationBoxComponent,
    MouseComponent,
    ContainedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
