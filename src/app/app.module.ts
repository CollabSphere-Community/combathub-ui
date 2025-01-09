import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';
import { RoutingModule } from './routing/routing.module';
import { MaterialsModule } from './materials/materials.module';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    CoreModule,
    MaterialsModule,
    NavModule,
  ],
  providers: [
    provideAnimationsAsync(),
    // providePrimeNG({
    //   theme: {
    //     preset: Aura,
    //   },
    // }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
