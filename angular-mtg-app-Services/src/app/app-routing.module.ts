import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetCreateComponent } from './set-create/set-create.component';
import { SetEditComponent } from './set-edit/set-edit.component';
import { SetListComponent } from './set-list/set-list.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'sets-list'},
  {path: 'create-sets', component: SetCreateComponent},
  {path: 'sets-list', component: SetListComponent},
  {path: 'sets-edit/:code', component: SetEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
