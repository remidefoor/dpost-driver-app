import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Package } from '../models/interfaces/package.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) {
  }

  fetchPackages(): Observable<Package[]> {
    return this.http.get<Package[]>('assets/mock/packages.json');
  }

  fetchPackage(packageId: number): Observable<Package> {
    return this.http.get<Package>('assets/mock/package.json');
  }

}
