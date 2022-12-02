import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Package } from '../../models/interfaces/package.interface';
import {DeliveryPostBody} from '../../models/interfaces/delivery-post-body.interface';
import {UserService} from '../../services/user.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent {

  package: Package | undefined;

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,
              private readonly userService: UserService,
              private readonly apiService: ApiService,) {
    const routeParams = this.route.snapshot.paramMap;
    const packageId = Number(routeParams.get('packageId'));
    this.apiService.fetchPackage(packageId)
      .subscribe(pkg => this.package = pkg);
  }

  private createDeliveryPostBody(): DeliveryPostBody {
    return {
      packageId: this.package!.id,
      driverId: this.userService.user.marsId
    }
  }

  applyForPackage(): void {
    this.apiService.postDelivery(this.createDeliveryPostBody())
      .subscribe(delivery => this.router.navigate(['deliveries', delivery.id]));
  }

}
