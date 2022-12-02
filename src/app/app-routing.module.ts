import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PackagesComponent} from './components/packages/packages.component';
import { PackageComponent } from './components/package/package.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
  { path: 'packages', component: PackagesComponent },
  { path: 'packages/:packageId', component: PackageComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: '', redirectTo: '/packages', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
