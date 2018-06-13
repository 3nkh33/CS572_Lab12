import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyListComponent } from './my-list.component';
import { MycolorDirective } from './mycolor.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { UpperDirective } from './upper.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    MycolorDirective,
    MyvisibilityDirective,
    UpperDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
