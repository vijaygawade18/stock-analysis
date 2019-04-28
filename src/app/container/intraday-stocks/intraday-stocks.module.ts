import { NgModule } from '@angular/core';
import { IntradayStocksComponent } from 'src/app/container/intraday-stocks/intraday-stocks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, SharedModule],
  declarations: [IntradayStocksComponent],
  exports: [IntradayStocksComponent]
})
export class IntradayStocksModule {}
