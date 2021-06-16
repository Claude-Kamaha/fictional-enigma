import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { KycRequestComponent } from './kyc-request/kyc-request.component';
import { KycInfoComponent } from './kyc-info/kyc-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const KycRequestRoutes: Route[] = [
  {
      path     : '',
      component: KycRequestComponent
  },
  {
    path     : '/:id',
    component: KycInfoComponent
}
];



@NgModule({
  declarations: [
    KycInfoComponent
  ],
  imports: [
    RouterModule.forChild(KycRequestRoutes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule ,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class KycSharedModule { }
