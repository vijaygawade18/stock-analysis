import { Component, OnInit } from '@angular/core';
import { ExportImportService } from 'src/app/shared/services/export-import.service';

@Component({
  selector: 'app-intraday-stocks',
  templateUrl: './intraday-stocks.component.html',
  styleUrls: ['./intraday-stocks.component.scss'],
  providers: [ExportImportService]
})
export class IntradayStocksComponent implements OnInit {
  public volatilityData = [];
  private niftyStocksData = [];

  constructor(private exportImportService: ExportImportService) {}

  ngOnInit() {
    this.exportImportService.niftyStocksExlData.subscribe(data => {
      this.niftyStocksData = data;
    });
    this.exportImportService.volatilityExlData.subscribe(data => {
      this.modifyData(data);
    });
  }

  public onFileChange(event) {
    this.exportImportService.onFileChange(event);
  }

  public filterNiftyHundredStocks() {
    let symbolIndex = null;
    const filteredNifty100Stocks = [];
    this.niftyStocksData.map((data, index) => {
      if (data && index === 0) {
        symbolIndex = data.indexOf('Symbol');
      }

      this.volatilityData.filter((node, i) => {
        if (data[symbolIndex] === node.symbol) {
          filteredNifty100Stocks.push(node);
        }
      });
    });
    this.volatilityData = filteredNifty100Stocks;
  }

  private modifyData(volatilityData) {
    volatilityData.forEach(childArray => {
      if (childArray && Array.isArray(childArray) && childArray.length) {
        this.volatilityData.push({
          symbol: childArray[1],
          daily: this.checkPropertyType(childArray[6]),
          yearly: this.checkPropertyType(childArray[7])
        });
      }
    });
  }

  private checkPropertyType(val) {
    return val && typeof val === 'number' ? (val * 100).toFixed(2) : val;
  }
}
