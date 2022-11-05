export class Package {

  size: string;
  src: string;
  dest: string;
  fee: number;

  constructor(size: string = '', src: string = '', dest: string = '', fee: number = NaN) {
    this.size = size;
    this.src = src;
    this.dest = dest;
    this.fee = fee;
  }

}
