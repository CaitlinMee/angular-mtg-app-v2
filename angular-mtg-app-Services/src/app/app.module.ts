import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SetCreateComponent } from './set-create/set-create.component';
import { SetEditComponent } from './set-edit/set-edit.component';
import { SetListComponent } from './set-list/set-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SetCreateComponent,
    SetEditComponent,
    SetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
