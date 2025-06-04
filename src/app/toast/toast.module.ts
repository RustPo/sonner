import {ToastComponent} from './toast.component';
import {NgModule} from '@angular/core';
import {ToasterComponent} from './toaster.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ToasterComponent, ToastComponent],
  imports: [CommonModule],
  exports: [ToasterComponent],
})
export class ToastModule { }
