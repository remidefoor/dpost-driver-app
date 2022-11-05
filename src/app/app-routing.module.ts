import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {PackagesComponent} from "./components/packages/packages.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";

const routes: Routes = [
  { path: '', component: PackagesComponent },
  { path: 'notifications', component: NotificationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
