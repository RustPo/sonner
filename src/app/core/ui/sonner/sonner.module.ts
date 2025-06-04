import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SonnerComponent} from './sonner.component';



@NgModule({
  declarations: [SonnerComponent],
  imports: [
    CommonModule
  ],
  exports: [SonnerComponent]
})
export class SonnerModule { }
