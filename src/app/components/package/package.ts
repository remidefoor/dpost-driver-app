export class Package {

  id: number;
  size: string;
  src: string;
  dest: string;
  fee: number;

  constructor(id: number, size: string, src: string, dest: string, fee: number) {
    this.id = id;
    this.size = size;
    this.src = src;
    this.dest = dest;
    this.fee = fee;
  }

}
