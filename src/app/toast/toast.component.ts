import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ToastConfig} from './toast.model';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: false,
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' })),
      ]),
    ]),
  ],
})
export class ToastComponent {
  @Input() toast!: ToastConfig;
  @Output() dismiss = new EventEmitter<void>();

  isVisible = true;

  onDismiss() {
    this.dismiss.emit();
  }

  onAnimationDone() {
      this.dismiss.emit(); // Только после завершения hide-анимации
  }
}
