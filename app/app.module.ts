import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TapListComponent }  from './tap-list.component';
import { NewTapComponent }  from './new-tap.component';
import { PourTapComponent }  from './pour-tap.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TapListComponent,
    NewTapComponent,
    PourTapComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
