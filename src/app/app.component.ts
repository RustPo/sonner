import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToastService} from './toast/toast.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private toastService: ToastService) {}

  showToast() {
    this.toastService.show({
      title: 'Top Left!',
      description: 'This toast is in the top-left corner',
      type: 'info',
      position: 'bottom-right',
    });
  }
}
