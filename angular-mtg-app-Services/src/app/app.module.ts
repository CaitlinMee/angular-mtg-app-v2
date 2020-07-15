import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
