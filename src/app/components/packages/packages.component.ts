import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from '../package/package';
import { PackagesService } from './packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packagesService: PackagesService;
  packages: Package[];

  constructor(private router: Router) {
    this.packagesService = new PackagesService();
    this.packages = this.packagesService.packages;
  }

  ngOnInit(): void {
  }

  displayPackage(pkg: Package): void {
    this.router.navigate(['/packages', pkg.id]);
  }

}
