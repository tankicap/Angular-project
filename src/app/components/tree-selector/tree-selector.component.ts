import { CommonModule } from '@angular/common';
import { Component, Input, Output, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import {
  months,
  MonthSelectorComponent,
} from './month-selector/month-selector.component';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { ReplaySubject, Observable } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MonthTransactionComponent } from "./month-transaction/month-transaction.component";

// #region table component
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

// #endregion

@Component({
  selector: 'app-tree-selector',
  imports: [
    CommonModule,
    MatToolbarModule,
    CountrySelectorComponent,
    MonthSelectorComponent,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MonthTransactionComponent
],
  templateUrl: './tree-selector.component.html',
  styleUrl: './tree-selector.component.scss',
})
export class TreeSelectorComponent {
  selectedContry!: string;
  selectedMonth!: string;

  resetSelection() {
    this.selectedContry = '';
    this.selectedMonth = '';
  }

  onCountrySelected(country: string) {
    console.log('onCountrySelected', country);
    this.selectedContry = country;
  }

  onMonthSelected(month: string) {
    console.log('onMonthSelected', month);

    // this.resetSelection();

    this.selectedMonth = month;
  }

  // #region table component
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new MatTableDataSource<PeriodicElement>(this.dataToDisplay);
  selectedRows: PeriodicElement[] = []; // Променлива за селектираните редови


  


  onSelectRows(row:PeriodicElement[]){
   this.selectedRows=row;
  }



  removeData() {
    this.dataToDisplay=this.dataToDisplay.filter((row)=>!this.selectedRows.includes(row));
    this.dataSource.data = this.dataToDisplay;
    this.selectedRows=[];
  }
}

