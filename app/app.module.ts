import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TapListComponent }  from './tap-list.component';
import { NewTapComponent }  from './new-tap.component';
import { PourTapComponent }  from './pour-tap.component';
import { EditTapComponent }  from './edit-tap.component';
import { VanishingPipe } from './vanishing.pipe';

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
    EditTapComponent,
    VanishingPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
