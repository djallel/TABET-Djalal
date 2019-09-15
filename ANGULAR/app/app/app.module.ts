import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { AppComponent } from './app.component';

import {
  MatCheckboxModule,
  MatButtonModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxHmCarouselModule,

    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
