import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { PackagesComponent } from './components/packages/packages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PackageComponent } from './components/package/package.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageCardComponent,
    PackagesComponent,
    NotificationsComponent,
    PackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
