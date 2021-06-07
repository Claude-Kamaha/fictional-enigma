import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { tap } from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ikyc } from '../../modules/customers/customers.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  token : string;

  customers: Ikyc[];
  onCustomersChanged: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.onCustomersChanged = new BehaviorSubject({});
    this.token = localStorage.getItem('token')
   }

   /* resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
   {
       return new Promise<void>((resolve, reject) => {

           Promise.all([
               this.getListKyc('confirmed')
           ]).then(
               () => {
                   resolve();
               },
               reject
           );
       });
   }

  getListKyc(status: string): Promise<any>{

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'client-id': '8d90927083',
          'api-key': 'CeL1J]kPJSn]&@$Rg9kk0qbIL',
          'Authorization': `Bearer ${this.token}`
          
      })}
      status = 'confirmed';
      return new Promise((resolve, reject) => {
        const Url = `https://sandbox-nellys-coin.ejaraapis.xyz/api/v1/customer/find-all-kyc-requests`+'?status='+status;  // URL to web prod
        this.http.get<any>(Url,httpOptions)
        .subscribe((response: any) => {
          console.log(response)
          this.customers = response;
          this.onCustomersChanged.next(this.customers);
          resolve(response);
      }, reject);
});
}*/
     getListKyc(status: string): Observable<any> {

  const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'client-id': '8d90927083',
        'api-key': 'CeL1J]kPJSn]&@$Rg9kk0qbIL',
        'Authorization': `Bearer ${this.token}`
        
    })

  }
 
      status ='pending' 
      const Url = `https://sandbox-nellys-coin.ejaraapis.xyz/api/v1/customer/find-all-kyc-requests`+'?status='+status;  // URL to web prod
      return this.http.get<any>(Url,httpOptions).pipe(
        tap(() => console.log('get list kyc list')),
        catchError(this.handleError<Ikyc[]>('send'))
      );
    }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any) => {

          switch (error.status) {
              case 201: {
                  alert('The provided username/email and password combination does not match any user in the database');
                    //  verticalPosition: 'top',
                     // duration: 4000,
                  //};
                  return `Internal Server Error: ${(error.message)}`;
              }
              case 401: {
                  alert('The corresponding account is either desactivated, frozen or deleted.')
                     // verticalPosition: 'top',
                     //duration: 4000,
                  ;}
                  return `Not found: ${(error.message)}`;;
              }
             
              

          }
          // TODO: send the error to remote logging infrastructure
         // console.log(error.body.message); // log to console instead


          // TODO: better job of transforming error for user consumption


          // Let the app keep running by returning an empty result.
          //return of(result as T);
      };



  }


    //return this.http.get(`https://sandbox-nellys-coin.ejaraapis.xyz/api/v1/customer/find-all-kyc-requests`, {status})
   /* status.set('type', 'string');
    
    return this.http.get(`https://sandbox-nellys-coin.ejaraapis.xyz/api/v1/customer/find-all-kyc-requests`, {status})
    */
  

