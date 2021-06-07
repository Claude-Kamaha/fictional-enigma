import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { Route, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
//import { MatPaginatorModule } from '@angular/material';

const customersRoutes: Route[] = [
  {
      path     : '',
      component: CustomersComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    
      RouterModule.forChild(customersRoutes),
      CommonModule,
      MatInputModule,
MatTableModule,
MatPaginatorModule,
MatSortModule,
MatProgressSpinnerModule,
MatSnackBarModule
  ]
})
export class CustomersModule { }
