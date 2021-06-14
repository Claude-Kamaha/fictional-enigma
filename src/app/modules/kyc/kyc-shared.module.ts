import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { KycRequestComponent } from './kyc-request/kyc-request.component';
import { KycInfoComponent } from './kyc-info/kyc-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
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
  ]
})
export class KycSharedModule { }
