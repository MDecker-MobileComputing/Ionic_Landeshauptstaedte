import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

/**
 * Siehe Import `AgmCoreModule.forRoot(...)`.
 */
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            AgmCoreModule.forRoot( /* {apiKey: '{API KEY GOES HERE}'} */  ),
            ServiceWorkerModule.register('ngsw-worker.js', {
              enabled: environment.production,
              // Register the ServiceWorker as soon as the app is stable
              // or after 30 seconds (whichever comes first).
              registrationStrategy: 'registerWhenStable:30000'
            })
           ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
