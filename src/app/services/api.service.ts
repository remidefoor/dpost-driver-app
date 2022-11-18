import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageInterface } from '../models/package.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) {
  }

  fetchPackages(): Observable<PackageInterface[]> {
    return this.http.get<PackageInterface[]>('assets/mock/packages.json');
  }

}
