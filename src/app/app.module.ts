import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { PackagesComponent } from './components/packages/packages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PackageComponent } from './components/package/package.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageCardComponent,
    PackagesComponent,
    NotificationsComponent,
    PackageComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
