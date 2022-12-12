import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from '../../models/interfaces/package.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {

  range: number;
  packages: Package[] | undefined;

  constructor(private readonly router: Router, private readonly apiService: ApiService) {
    this.range = 10;
    this.getPackages();
  }

  getPackages(): void {
    this.apiService.getPackages(this.range)
      .subscribe(packages => this.packages = packages);
  }

  routePackage(pkg: Package): void {
    this.router.navigate(['/packages', pkg.id]);
  }

}
