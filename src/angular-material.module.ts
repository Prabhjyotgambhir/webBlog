import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: []
})
export class AngularMaterialModule { }
