import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Delivery} from '../../models/interfaces/delivery.interface';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {

  delivery: Delivery | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly apiService: ApiService) {
    const routeParams = this.route.snapshot.paramMap;
    const deliveryId = Number(routeParams.get('deliveryId'));
    this.apiService.fetchDelivery(deliveryId)
      .subscribe(delivery => this.delivery = delivery);
  }

}
