import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Bai5Component } from './bai5/bai5.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai7Component } from './bai7/bai7.component';
import { Bai6Component } from './bai6/bai6.component';
import { Bai3Component } from './bai3/bai3.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai5Component,
    Bai1Component,
    Bai7Component,
    Bai6Component,
    Bai3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
