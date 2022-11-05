import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PackageComponent } from './components/package/package.component';
import { PackagesComponent } from './components/packages/packages.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
