import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/**
 * Siehe Import `AgmCoreModule.forRoot(...)`.
 */
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            AgmCoreModule.forRoot( /* {apiKey: '{API KEY GOES HERE}'} */  )
           ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
