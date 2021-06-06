import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { Route, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';

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
MatProgressSpinnerModule
  ]
})
export class CustomersModule { }
