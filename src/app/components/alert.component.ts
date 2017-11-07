import {Component} from '@angular/core';
import {AlertService} from '../services/alert.service';
import {Alert} from '../entities/alert';

@Component({
  selector: 'app-alert',
  templateUrl: '../html/alert.component.html',
  providers: []
})

export class AlertComponent {
  alerts: Array<Alert> = [];

  constructor(private alertService: AlertService) {
    alertService.alertAction$.subscribe(
      alert => {
        if (!alert) {
          // clear alerts when an empty alert is received
          this.alerts = [];
          return;
        }
        // add alert to array
        this.alerts.push(alert);
      });
  }
}
