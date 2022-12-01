import { DeliveryState } from '../types/delivery-state.type';
import { Person } from './person.interface';
import { Package } from './package.interface';

export interface Delivery {
  id: number;
  state: DeliveryState;
  driver: Person;
  package: Package;
  stateChangedAt: string;
}
