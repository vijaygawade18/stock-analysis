import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntradayStocksComponent } from 'src/app/container/intraday-stocks/intraday-stocks.component';
import { TestComponent } from 'src/app/container/test/test.component';

const routes: Routes = [
  { path: 'intraday-stocks', component: IntradayStocksComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'intraday-stocks', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
