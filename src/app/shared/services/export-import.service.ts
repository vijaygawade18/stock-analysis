import { Injectable } from '@angular/core';

import * as XLSX from 'xlsx';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportImportService {
  public data: any = [];
  private wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  private fileName = 'SheetJS.xlsx';

  private niftyStocksDataSource = new BehaviorSubject<any>([]);
  public niftyStocksExlData = this.niftyStocksDataSource.asObservable();

  private volatilityDataSource = new BehaviorSubject<any>([]);
  public volatilityExlData = this.volatilityDataSource.asObservable();

  public onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = evt.target as DataTransfer;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    } else {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        if (evt.target.name.toLowerCase() === 'nifty100') {
          this.niftyStocksDataSource.next(this.data);
        } else {
          this.volatilityDataSource.next(this.data);
        }
      };
      reader.readAsBinaryString(target.files[0]);
    }
  }

  public export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
