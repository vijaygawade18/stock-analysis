
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from './store/effects/app.effects';
import { LayoutModule } from 'src/app/container/layout/layout.module';
import { IntradayStocksModule } from './container/intraday-stocks/intraday-stocks.module';
import { TestComponent } from './container/test/test.component';
import { SharedModule } from 'src/app/shared/shared.module';

const ContainerModules = [LayoutModule, IntradayStocksModule];

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserAnimationsModule,
    ...ContainerModules,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
