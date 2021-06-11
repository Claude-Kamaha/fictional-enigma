import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApplicationInitStatus, Injectable } from '@angular/core';
import { Ikyc } from 'app/modules/customers/customers.component';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class KycServiceService {
  token : string;
  

  constructor(private httpclient: HttpClient) {
    this.token = localStorage.getItem('token');
   }


  public listKycRequest(status: string): Observable<Ikyc[]> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'client-id': '8d90927083',
          'api-key': 'CeL1J]kPJSn]&@$Rg9kk0qbIL',
          'Authorization': `Bearer ${this.token}`
          
      })
  
    }
    const Url = `https://sandbox-nellys-coin.ejaraapis.xyz/api/v1/customer/find-all-kyc-requests`+'?status='+status;
return this.httpclient.get<Ikyc[]>(Url,httpOptions)

}
/*

public getKycById(id:number){
  const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'client-id': '8d90927083',
        'api-key': 'CeL1J]kPJSn]&@$Rg9kk0qbIL',
        'Authorization': `Bearer ${this.token}`
        
    }),
    httpParams: new HttpParams({
      fromObject: {
        request_Id: 'claude'
  
      }
    })
  }
  
  const Url = `https://sandbox-nellys-coin.ejaraapis.xyz/api/v1/customer/find-customer-kyc-info`//+?requestId=1;
  return this.httpclient.get<any>(Url,httpOptions,)
}
*/

}
