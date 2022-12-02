import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Package } from '../models/interfaces/package.interface';
import {Delivery} from '../models/interfaces/delivery.interface';
import {DeliveryPostBody} from '../models/interfaces/delivery-post-body.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) {
  }

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>('https://api.dpost.online/packages');
  }

  getPackage(packageId: number): Observable<Package> {
    return this.http.get<Package>(`https://api.dpost.online/packages/${packageId}`);
  }

  postDelivery(deliveryPost: DeliveryPostBody): Observable<Delivery> {
    return this.http.post<Delivery>('https://api.dpost.online/deliveries', deliveryPost);
  }

  getDelivery(deliveryId: number): Observable<Delivery> {
    return this.http.get<Delivery>(`https://api.dpost.online/deliveries/${deliveryId}`);
  }

}
