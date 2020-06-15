import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeHe from '@angular/common/locales/he';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';

registerLocaleData(localeHe, 'he');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'he' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
