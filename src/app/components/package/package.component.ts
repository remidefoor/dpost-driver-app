import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackagesService } from '../packages/packages.service';
import { Package } from './package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packagesService: PackagesService;
  @Input() package: Package | undefined;

  constructor(private route: ActivatedRoute) {
    this.packagesService = new PackagesService();
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const packageId = Number(routeParams.get('packageId'));
    this.package = this.packagesService.getPackage(packageId);
  }

}
