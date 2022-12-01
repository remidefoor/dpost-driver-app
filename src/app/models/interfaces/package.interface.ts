import {Person} from './person.interface';
import {PackageSize} from '../types/package-size.type';

export interface Package {
  id: number,
  marsBoxId: string;
  size: PackageSize,
  sender: Person,
  receiver: Person,
  fee: number
}
