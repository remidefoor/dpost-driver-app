import { DeliveryState } from '../types/delivery-state.type';
import { Person } from './person.interface';
import { PackageInterface } from '../package.interface';

export interface Delivery {
  id: number;
  state: DeliveryState;
  driver: Person;
  package: PackageInterface;
  stateChangedAt: string;
}
