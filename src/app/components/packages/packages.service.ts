import { Package } from "../package-card/package";

export class PackagesService {
  packages: Package[];

  constructor() {
    this.packages = this.#fetchPackages();
  }

  #fetchPackages(): Package[] {
    return [
      {
        size: "Small",
        src: "Dome 9 H1B",
        dest: "Dome 9 H11",
        fee: 1.50
      },
      {
        size: "Small",
        src: "Dome 9 H19",
        dest: "Dome 9 H113",
        fee: 1.75
      },
      {
        size: "Letter",
        src: "Dome 11 H19",
        dest: "Dome 9 H113",
        fee: 2.25
      },
      {
        size: "Large",
        src: "Dome 9 H3",
        dest: "Dome 11 H97",
        fee: 3.0
      },
    ];
  }

}
