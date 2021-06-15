import { Component, Input, OnInit } from '@angular/core';
import { KycServiceService } from 'app/core/kyc/kyc-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ikyc } from 'app/models/requestKyc';
import { Location } from '@angular/common';
@Component({
  selector: 'app-kyc-info',
  templateUrl: './kyc-info.component.html',
  styleUrls: ['./kyc-info.component.scss']
})
export class KycInfoComponent implements OnInit {
  errorMessage: any;
  customerlist: Ikyc;
  message:string
  public disabled = true;
  selected = 'reject';
  custreq: string
   id = parseInt(this._Activatedroute.snapshot.paramMap.get('id'));

  @Input() row;

  constructor(private kycservice: KycServiceService,
    private _router:Router,
    private _Activatedroute:ActivatedRoute,
    private location: Location) { }
    
public customerId;
  ngOnInit(): void {
 // let id = parseInt(this._Activatedroute.snapshot.paramMap.get('id'));
  //console.log( this._Activatedroute.snapshot.params['id']);
 /*Method 2
  this._Activatedroute.params.subscribe( params =>{
    console.log(params);
    console.log(params['id'])}
    )*/
    this.getKyc(this.id);
  
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

public toggleDisabled(): void {
  this.disabled = !this.disabled;
}
onKycChange(event) {
  console.log(event.value)
  // this.getAllRequestByStatus(event.value);
 }
 goBack(): void {
  this.location.back();
}
onSubmit(): void {
  // Process checkout data here
  //onKycChange(event)
  console.log(this.message)
  this.kycservice.updateKycStatus(this.id,this.custreq,this.message,)
 
}
}
