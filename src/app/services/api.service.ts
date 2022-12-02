import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment.prod';
import { Package } from '../models/interfaces/package.interface';
import {Delivery} from '../models/interfaces/delivery.interface';
import {DeliveryPostBody} from '../models/interfaces/delivery-post-body.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL: string;

  constructor(private readonly http: HttpClient) {
    this.BASE_URL = environment.apiBaseUrl || 'https://api.dpost.online/packages';
  }

  getPackages(): Observable<Package[]> {
    console.log(this.BASE_URL);
    return this.http.get<Package[]>(`${this.BASE_URL}/packages`);
  }

  getPackage(packageId: number): Observable<Package> {
    return this.http.get<Package>(`${this.BASE_URL}/packages/${packageId}`);
  }

  postDelivery(deliveryPost: DeliveryPostBody): Observable<Delivery> {
    return this.http.post<Delivery>(`${this.BASE_URL}/deliveries`, deliveryPost);
  }

  getDelivery(deliveryId: number): Observable<Delivery> {
    return this.http.get<Delivery>(`${this.BASE_URL}/deliveries/${deliveryId}`);
  }

}
