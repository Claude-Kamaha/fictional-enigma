import { Component, Input, OnInit } from '@angular/core';
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
  @Input() row;

  constructor(private kycservice: KycServiceService,
    private _router:Router,
    private _Activatedroute:ActivatedRoute) { }
  
public customerId;
  ngOnInit(): void {
  let id = parseInt(this._Activatedroute.snapshot.paramMap.get('id'));
  //console.log( this._Activatedroute.snapshot.params['id']);
  this._Activatedroute.params.subscribe( params =>{
    console.log(params);
    console.log(params['id'])}
    )
    this.getKyc(1);
  
}
getKyc(id: number): void {
  this.kycservice.getKycById(id).subscribe( (response: any) => {
    console.log(response.data)
    
    this.customerlist=response.data;
  //  console.log(this.row);
    console.log(this.customerlist.first_name);
    //ext: customerlist => this.customerlist = customerlist,
    //error: err => this.errorMessage = err
  } );
}

}
