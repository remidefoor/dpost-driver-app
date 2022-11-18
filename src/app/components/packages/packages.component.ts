import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PackageInterface } from '../../models/package.interface';
import { PackagesService } from "./packages.service";

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {

  packages: PackageInterface[];

  constructor(private readonly router: Router, private readonly packagesService: PackagesService) {
    this.packages = packagesService.packages;
  }

  routePackage(pkg: PackageInterface): void {
    this.router.navigate(['/packages', pkg.id]);
  }

}
