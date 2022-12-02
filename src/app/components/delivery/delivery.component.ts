import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Delivery} from '../../models/interfaces/delivery.interface';
import {QRCodeErrorCorrectionLevel} from 'angularx-qrcode';
import {ApiService} from '../../services/api.service';

const QR_CODE_WIDTH = 256;
const QR_CODE_ERROR_CORRECTION_LEVEL = 'M';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {

  delivery: Delivery | undefined;
  qrCodeWidth: number;
  qrCodeErrorCorrectionLevel: QRCodeErrorCorrectionLevel;

  constructor(private readonly route: ActivatedRoute, private readonly apiService: ApiService) {
    const routeParams = this.route.snapshot.paramMap;
    const deliveryId = Number(routeParams.get('deliveryId'));
    this.apiService.getDelivery(deliveryId)
      .subscribe(delivery => this.delivery = delivery);

    this.qrCodeWidth = QR_CODE_WIDTH;
    this.qrCodeErrorCorrectionLevel = QR_CODE_ERROR_CORRECTION_LEVEL;
  }

}
