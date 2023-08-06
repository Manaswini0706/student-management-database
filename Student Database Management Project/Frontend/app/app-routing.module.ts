import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:"update",component:UpdateComponent},
  {path:"delete",component:DeleteComponent },
  {path:"display",component:DisplayComponent},
  {path:"create",component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
