import { Component, OnInit } from '@angular/core';
import { KycServiceService } from 'app/core/kyc/kyc-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ikyc } from 'app/models/requestKyc';
@Component({
  selector: 'app-kyc-info',
  templateUrl: './kyc-info.component.html',
  styleUrls: ['./kyc-info.component.scss']
})
export class KycInfoComponent implements OnInit {
  errorMessage: any;
  customerlist: Ikyc;

  constructor(private kycservice: KycServiceService,
    private _router:Router,
    private _Activatedroute:ActivatedRoute) { }
  
public customerId;
  ngOnInit(): void {
  let id = parseInt(this._Activatedroute.snapshot.paramMap.get('requestId'));
  console.log(id)
    this.getKyc(1);
  
}
getKyc(id: number): void {
  this.kycservice.getKycById(id).subscribe( data => {
    this.customerlist=data;
   
    console.log(this.customerlist)
    //ext: customerlist => this.customerlist = customerlist,
    //error: err => this.errorMessage = err
  } );
}

}
