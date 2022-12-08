import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Delivery} from '../../models/interfaces/delivery.interface';
import {QRCodeErrorCorrectionLevel} from 'angularx-qrcode';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {

  QR_CODE_WIDTH: number;
  QR_CODE_ERROR_CORRECTION_LEVEL: QRCodeErrorCorrectionLevel;

  delivery: Delivery | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly apiService: ApiService) {
    this.QR_CODE_WIDTH = 256;
    this.QR_CODE_ERROR_CORRECTION_LEVEL = 'M';

    const routeParams = this.route.snapshot.paramMap;
    const deliveryId = Number(routeParams.get('deliveryId'));
    this.apiService.getDelivery(deliveryId)
      .subscribe(delivery => this.delivery = delivery);
  }

}
