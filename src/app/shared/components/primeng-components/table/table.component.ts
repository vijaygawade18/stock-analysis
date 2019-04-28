import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: []
})
export class TableComponent implements OnInit {
  @Input() volatilityData: any = [];
  public cols: any = [];

  ngOnInit() {
    this.cols = [
      { field: 'symbol', header: 'Symbol' },
      { field: 'daily', header: 'Daily' },
      { field: 'yearly', header: 'Yearly' }
    ];
  }
}
