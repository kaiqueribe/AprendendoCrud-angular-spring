import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";


@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],

  imports: [BrowserModule,
    AppRoutingModule,
    MatToolbarModule], providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
}
