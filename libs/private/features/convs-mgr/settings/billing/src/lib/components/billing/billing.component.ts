import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentDialogComponent } from '../../modals/add-payment-dialog/add-payment-dialog.component';
import { EditPaymentDialogComponent } from '../../modals/edit-payment-dialog/edit-payment-dialog.component';


export interface PeriodicElement {
  name: string;
  position: any;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "23 August 2023", name: 'Plan 1', weight: 1200, symbol: 'Download'},
  {position: "23 July 2023", name: 'Plan 1', weight: 1200, symbol: 'Download'},
  {position: "23 July 2023", name: 'plan 1', weight: 1200, symbol: 'Download'},
 
];

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})



export class BillingComponent {
  org: any;

  constructor(private dialog: MatDialog){}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  addPaymentMethod() {
    const dialogRef = this.dialog.open(AddPaymentDialogComponent, {
      minWidth: '410px',
      minHeight: '338px',
      data: this.org,
    });
  }
  

  editPaymentMethod() {
    const dialogRef = this.dialog.open(EditPaymentDialogComponent, {
      minWidth: '500px',
      minHeight: '200px',
      data: this.org
    });
  }

  selectedOption: string = 'subscription'; // Initialize with the default selected option

  // You can have a method to update the selected option based on user interaction
  selectOption(option: string) {
    this.selectedOption = option;
  }
}



