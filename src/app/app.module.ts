import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ViewTimeslotComponent } from './view-timeslot/view-timeslot.component';
import { CreateTimeslotComponent } from './create-timeslot/create-timeslot.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTimeslotComponent,
    CreateTimeslotComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxMaterialTimepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
