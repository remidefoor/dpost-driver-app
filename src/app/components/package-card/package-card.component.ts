import { Component, Input } from '@angular/core';
import { PackageInterface } from '../../models/package.interface';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent {

  @Input() package: PackageInterface | undefined;

  constructor() {
  }

}
