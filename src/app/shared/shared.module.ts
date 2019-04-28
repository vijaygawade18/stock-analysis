
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';

import { TableComponent } from 'src/app/shared/components/primeng-components/table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableModule],
  exports: [TableComponent]
})
export class SharedModule {}
