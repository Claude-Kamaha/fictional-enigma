import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KycServiceService {
  token : string;
 

  constructor(private httpclient: HttpClient) {
    this.token = localStorage.getItem('token');
   }


  public listKycRequest(status: string){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'client-id': '8d90927083',
          'api-key': 'CeL1J]kPJSn]&@$Rg9kk0qbIL',
          'Authorization': `Bearer ${this.token}`
          
      })
  
    }
    const Url = `https://sandbox-nellys-coin.ejaraapis.xyz/api/v1/customer/find-all-kyc-requests`+'?status='+status;
return this.httpclient.get<any>(Url,httpOptions)

}
}
