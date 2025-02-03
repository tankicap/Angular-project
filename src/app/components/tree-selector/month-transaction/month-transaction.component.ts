import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PeriodicElement } from '../tree-selector.component';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material/table';
import { ElementDetailComponent } from "./element-detail/element-detail.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-month-transaction',
  imports: [MatCheckboxModule, MatTableModule, ElementDetailComponent,CommonModule],
  templateUrl: './month-transaction.component.html',
  styleUrl: './month-transaction.component.scss'
})
export class MonthTransactionComponent {

  @Input() dataSource: any;

  selectedElement?:PeriodicElement;
  
  @Output() selectionChange = new EventEmitter<PeriodicElement[]>();

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  selection = new SelectionModel<PeriodicElement>(true, []);
  
  constructor(){
    console.log(this.selection.selected + 'seee');
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource.data);
    }
    
  }

  checkboxLabel(row?: PeriodicElement): string {
    return row ? 
      `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}` : 
      `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }

  onRowSelected(row:PeriodicElement){
    this.selection.toggle(row);
    this.selectionChange.emit(this.selection.selected);
  }

  onDetail(row:PeriodicElement){
    this.selectedElement=row;
  }

}
