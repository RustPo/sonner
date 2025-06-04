import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastConfig } from './toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toasts = new BehaviorSubject<ToastConfig[]>([]);
  toasts$ = this._toasts.asObservable();

  show(toast: Partial<ToastConfig>) {
    const config: ToastConfig = {
      id: crypto.randomUUID(),
      title: '',
      type: 'info',
      duration: 4000,
      dismissible: true,
      position: 'bottom-right',
      ...toast,
    };

    const updated = [config, ...this._toasts.getValue()];
    this._toasts.next(updated);

    if (config.duration !== Infinity) {
      setTimeout(() => this.dismiss(config.id), config.duration);
    }
  }

  dismiss(id: string) {
    const updated = this._toasts.getValue().filter((t) => t.id !== id);
    this._toasts.next(updated);
  }

  clear() {
    this._toasts.next([]);
  }
}
