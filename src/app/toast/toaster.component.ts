import {Component, OnInit} from '@angular/core';
import {ToastService} from './toast.service';
import {ToastConfig} from './toast.model';
import {AppModule} from '../app.module';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  standalone: false
})
export class ToasterComponent implements OnInit {
  toastsByPosition: Record<string, ToastConfig[]> = {
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': [],
  };

  constructor(private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.toastService.toasts$.subscribe((toasts) => {
      // Группируем тосты по position
      this.toastsByPosition = {
        'top-left': [],
        'top-right': [],
        'bottom-left': [],
        'bottom-right': [],
      };

      toasts.forEach((toast) => {
        const pos = toast.position || 'bottom-right';
        this.toastsByPosition[pos].push(toast);
      });
    });
  }

  dismiss(id: string) {
    console.log(id)
    this.toastService.dismiss(id);
  }

  trackById(index: number, toast: ToastConfig): string {
    return toast.id;
  }

  trackByPosition(index: number, position: string): string {
    return position;
  }
}
