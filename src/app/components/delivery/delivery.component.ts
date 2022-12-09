import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Delivery} from '../../models/interfaces/delivery.interface';
import {QRCodeErrorCorrectionLevel} from 'angularx-qrcode';
import {ApiService} from '../../services/api.service';
import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  QR_CODE_WIDTH: number;
  QR_CODE_ERROR_CORRECTION_LEVEL: QRCodeErrorCorrectionLevel;

  delivery: Delivery | undefined;
  stateMsg: string;
  instruction: string;
  cta: string;

  constructor(private readonly route: ActivatedRoute,
              private readonly apiService: ApiService,
              private readonly notificationsService: NotificationsService) {
    this.QR_CODE_WIDTH = 256;
    this.QR_CODE_ERROR_CORRECTION_LEVEL = 'M';

    const routeParams = this.route.snapshot.paramMap;
    const deliveryId = Number(routeParams.get('deliveryId'));
    this.apiService.getDelivery(deliveryId)
      .subscribe(delivery => {
        this.delivery = delivery;
        this.updateUi();
      });

    this.stateMsg = '';
    this.instruction = '';
    this.cta = '';
  }

  ngOnInit() {
    this.notificationsService.getNotification().subscribe((delivery: Delivery) => {
      if (this.delivery?.id === delivery.id) {
        this.delivery = delivery;
        this.updateUi();
      }
    });
  }

  updateUi(): void {
    switch (this.delivery?.state) {
      case 'transit':
        this.stateMsg = 'You\'re en route to drop off a package';
        this.instruction = 'Drive to the drop-off location and show the QR code to the receiver';
        this.cta = 'Send drop-off location to car';
        break;
      case 'delivered':
          this.stateMsg = 'Great! You\'ll be paid shortly.\nHere\'s a summary of your delivery:';
        break;
      default:
        this.stateMsg = 'You\'ve been assigned to the delivery';
        this.instruction = 'Drive to the pick-up location and show the QR code to the sender';
        this.cta = 'Send pick-up location to car';
    }
  }

}
