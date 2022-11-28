import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Package } from '../../models/interfaces/package.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {

  packages: Observable<Package[]>;

  constructor(private readonly router: Router, private readonly apiService: ApiService) {
    this.packages = apiService.fetchPackages();
  }

  routePackage(pkg: Package): void {
    this.router.navigate(['/packages', pkg.id]);
  }

}
