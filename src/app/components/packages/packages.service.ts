import { Injectable } from '@angular/core';
import { PackageInterface } from '../../models/package.interface';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  readonly packages: PackageInterface[];

  constructor() {
    this.packages = this.fetchPackages();
  }

  private fetchPackages(): PackageInterface[] {
    return [
      {
        id: 1,
        size: 'Small',
        src: 'Dome 9 H1B',
        dest: 'Dome 9 H11',
        fee: 1.50
      },
      {
        id: 2,
        size: 'Small',
        src: 'Dome 9 H19',
        dest: 'Dome 9 H113',
        fee: 1.75
      },
      {
        id: 3,
        size: 'Letter',
        src: 'Dome 11 H19',
        dest: 'Dome 9 H113',
        fee: 2.25
      },
      {
        id: 4,
        size: 'Large',
        src: 'Dome 9 H3',
        dest: 'Dome 11 H97',
        fee: 3.0
      },
      {
        id: 5,
        size: 'Small',
        src: 'Dome 9 H1B',
        dest: 'Dome 9 H11',
        fee: 1.50
      },
      {
        id: 6,
        size: 'Small',
        src: 'Dome 9 H19',
        dest: 'Dome 9 H113',
        fee: 1.75
      },
      {
        id: 7,
        size: 'Letter',
        src: 'Dome 11 H19',
        dest: 'Dome 9 H113',
        fee: 2.25
      },
      {
        id: 8,
        size: 'Large',
        src: 'Dome 9 H3',
        dest: 'Dome 11 H97',
        fee: 3.0
      },
      {
        id: 9,
        size: 'Small',
        src: 'Dome 9 H1B',
        dest: 'Dome 9 H11',
        fee: 1.50
      },
      {
        id: 10,
        size: 'Small',
        src: 'Dome 9 H19',
        dest: 'Dome 9 H113',
        fee: 1.75
      },
      {
        id: 11,
        size: 'Letter',
        src: 'Dome 11 H19',
        dest: 'Dome 9 H113',
        fee: 2.25
      },
      {
        id: 12,
        size: 'Large',
        src: 'Dome 9 H3',
        dest: 'Dome 11 H97',
        fee: 3.0
      },
      {
        id: 13,
        size: 'Small',
        src: 'Dome 9 H1B',
        dest: 'Dome 9 H11',
        fee: 1.50
      },
      {
        id: 14,
        size: 'Small',
        src: 'Dome 9 H19',
        dest: 'Dome 9 H113',
        fee: 1.75
      },
      {
        id: 15,
        size: 'Letter',
        src: 'Dome 11 H19',
        dest: 'Dome 9 H113',
        fee: 2.25
      }
    ];
  }

  getPackage(packageId: number): PackageInterface | undefined {
    return this.packages.find(pkg => pkg.id === packageId);
  }

}
