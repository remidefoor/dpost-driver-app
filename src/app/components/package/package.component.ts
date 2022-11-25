import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PackageInterface } from '../../models/package.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent {

  package: Observable<PackageInterface>;

  constructor(private readonly route: ActivatedRoute, private readonly apiService: ApiService) {
    const routeParams = this.route.snapshot.paramMap;
    const packageId = Number(routeParams.get('packageId'));
    this.package = apiService.fetchPackage(packageId);
  }

}
