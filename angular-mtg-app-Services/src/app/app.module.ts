import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from "@angular/common/http";

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Form Module
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
