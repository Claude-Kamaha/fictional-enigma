import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApplicationInitStatus, Injectable } from '@angular/core';
import { Ikyc } from 'app/models/requestKyc';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


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
getKycById(id: number): Observable<Ikyc | undefined> {
  const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'client-id': '8d90927083',
        'api-key': 'CeL1J]kPJSn]&@$Rg9kk0qbIL',
        'Authorization': `Bearer ${this.token}`
        
    })
  }
  const Url = `https://sandbox-nellys-coin.ejaraapis.xyz/api/v1/customer/find-customer-kyc-info`+'?requestId='+id;
  return this.httpclient.get<any>(Url,httpOptions)
    
}
private handleError(err: HttpErrorResponse): Observable<never> {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}
}
