import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Alert } from '../entities/alert';

@Injectable()
export class AlertService {
  private alertSource: Subject<Alert> = new Subject<Alert>();

  alertAction$ = this.alertSource.asObservable();

  private alert(alert: Alert) {
    this.alertSource.next(alert);
  }

  clear() {
    // clear alerts
    this.alertSource.next();
  }

  success(title: string, message: string, icon?: string) {
    this.alert(new Alert(title, message, 'success', icon));
  }

  error(title: string, message: string, icon?: string) {
    this.alert(new Alert(title, message, 'error', icon));
  }

  info(title: string, message: string, icon?: string) {
    this.alert(new Alert(title, message, 'info', icon));
  }

  warn(title: string, message: string, icon?: string) {
    this.alert(new Alert(title, message, 'warning', icon));
  }
}
