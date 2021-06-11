import { Component, OnInit } from '@angular/core';
import { KycServiceService } from 'app/core/kyc/kyc-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ikyc } from 'app/modules/customers/customers.component';
@Component({
  selector: 'app-kyc-info',
  templateUrl: './kyc-info.component.html',
  styleUrls: ['./kyc-info.component.scss']
})
export class KycInfoComponent implements OnInit {

  constructor(private kycservice: KycServiceService,
    private _router:Router,
    private _Activatedroute:ActivatedRoute) { }
    sub;
    ikyc:Ikyc;
   id;

  ngOnInit(): void {
  
  }


}
