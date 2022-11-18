import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackagesService } from '../packages/packages.service';
import { PackageInterface } from '../../models/package.interface';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  @Input() package: PackageInterface | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly packagesService: PackagesService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const packageId = Number(routeParams.get('packageId'));
    this.package = this.packagesService.getPackage(packageId);
  }

}
