import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {SonnerModule} from './core/ui/sonner/sonner.module';
import {ToastModule} from './toast/toast.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SonnerModule, ToastModule, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
