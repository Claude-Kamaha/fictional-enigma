import { Component, OnInit } from '@angular/core';
import { KycServiceService } from 'app/core/kyc/kyc-service.service';

@Component({
  selector: 'app-kyc-info',
  templateUrl: './kyc-info.component.html',
  styleUrls: ['./kyc-info.component.scss']
})
export class KycInfoComponent implements OnInit {

  constructor(private kycservice: KycServiceService) { }

  ngOnInit(): void {
  }

getKycInfo(){
  let resp =this.kycservice.getKycById().subscribe(data =>
  console.log('hello'))
}
}
