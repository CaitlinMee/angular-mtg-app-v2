import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SetsCreateComponent } from './sets-create/sets-create.component';
import { SetsEditComponent } from './sets-edit/sets-edit.component';
import { SetsListComponent } from './sets-list/sets-list.component';
import { SetCreateComponent } from './set-create/set-create.component';
import { SetEditComponent } from './set-edit/set-edit.component';
import { SetListComponent } from './set-list/set-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SetsCreateComponent,
    SetsEditComponent,
    SetsListComponent,
    SetCreateComponent,
    SetEditComponent,
    SetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
