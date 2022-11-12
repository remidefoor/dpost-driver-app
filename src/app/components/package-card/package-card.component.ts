import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../package/package';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent implements OnInit {

  @Input() package: Package | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
