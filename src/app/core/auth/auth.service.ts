import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
//import 'rxjs/add/operator/catch';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //apiURL: string;
  apiURL: string = 'https://sandbox.nellys-coin.ejaraapis.xyz/api/v1/auth/login';
  private _authenticated: boolean = false;

  constructor(
      private _httpClient: HttpClient,
      private _userService: UserService,
      private snackBar: MatSnackBar 
      ) { 
    
  }
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'client-id': '8d90927083',
      'api-key': 'CeL1J]kPJSn]&@$Rg9kk0qbIL'
    })
  };
   // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
     set accessToken(token: string)
     {
         localStorage.setItem('access_token', token);
     }
 
     get accessToken(): string
     {
         return localStorage.getItem('access_token') ?? '';
     }
 
     // -----------------------------------------------------------------------------------------------------
     // @ Public methods
     // -----------------------------------------------------------------------------------------------------
 
     /**
      * Forgot password
      *
      * @param email
      */
     forgotPassword(email: string): Observable<any>
     {
         return this._httpClient.post('api/auth/forgot-password', email);
     }
 
     /**
      * Reset password
      *
      * @param password
      */
     resetPassword(password: string): Observable<any>
     {
         return this._httpClient.post('api/auth/reset-password', password);
     }
 
     /**
      * Sign in
      *
      * @param credentials
      */



  loginCustomer(email:string,password:string): Observable<any> {
    
 // -----------------------------------------------------------------------------------------------------
    
    //Method 1: Storing customer details and connecting the api
    // -----------------------------------------------------------------------------------------------------
   
   
    /* const apiURL = 'https://sandbox.nellys-coin.ejaraapis.xyz/api/v1/auth/login';*/
     /*var data={
       log,password
     }
     var reqHeader = new HttpHeaders({
       'Content-Type':  'application/json',
       'client-id': 'my-auth-token',
       'api-key': 'my-auth-token'
     });
     return this.httpClient.post(this.apiURL ,data,{headers:reqHeader})
     .pipe(map(customer => {
         // store user details and jwt token in local storage to keep user logged in between page refreshes
         localStorage.setItem('currentUser', JSON.stringify(customer));
         
         return customer;
     }));
 */

// -----------------------------------------------------------------------------------------------------

//Method 2: Storing customer details and connecting the api
// -----------------------------------------------------------------------------------------------------
   
  /**   var data="log="+email+"&password="+password;
     var reqHeader = new HttpHeaders({
      'Content-Type':  'application/json',
      'client-id': '8d90927083',
      'api-key': 'CeL1J]kPJSn]&@$Rg9kk0qbIL'
   });
  return this._httpClient.post(this.apiURL ,data,{headers:reqHeader}).pipe(
      console.log("reached");
    catchError(this.handleError));
    }
  handleError(err:any){
    if(err instanceof HttpErrorResponse){
      console.error(err)
    }
    return throwError(err);
  
}
*/
    ​var user={
        "log":email,
        "password":password
        
      }
     const Url = this.apiURL;  // URL to web prod
     console.log(user);
        return this._httpClient.post<any>(Url, user, this.httpOptions).pipe(
          tap(() => console.log('send succesfuly')),
          catchError(this.handleError<any>('send'))
        );
      }
    ​
    ​
      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any)=> {
             
      switch (error.status) {
        case 201: {
          this.snackBar.open('The provided username/email and password combination does not match any user in the database', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
        });
            return `Internal Server Error: ${(error.body.message)}`;
        }
        case 401: {
          this.snackBar.open('The corresponding account is either desactivated, frozen or deleted.', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
        });
          return `Not found: ${(error.body.message)}`;;
        }
        case 500: {
          this.snackBar.open('An error occured. Contact an admin for assistance', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
        });
            return `Internal Server Error: ${(error.body.message)}`;
        }
        default: {
            return `Unknown Server Error: ${(error.body.message)}`;
        }
  
    }
      // TODO: send the error to remote logging infrastructure
      console.log(error.body.message); // log to console instead

​
      // TODO: better job of transforming error for user consumption
​
​
      // Let the app keep running by returning an empty result.
      return of(result as T);
        };
      }
    






/**
     * Sign in using the access token
     */
 signInUsingToken(): Observable<any>
 {
     // Renew token
     return this._httpClient.post('api/auth/refresh-access-token', {
         access_token: this.accessToken
     }).pipe(
         catchError(() => {

             // Return false
             return of(false);
         }),
         switchMap((response: any) => {

             // Store the access token in the local storage
             this.accessToken = response.access_token;

             // Set the authenticated flag to true
             this._authenticated = true;

             // Store the user on the user service
             this._userService.user = response.user;

             // Return true
             return of(true);
         })
     );
 }


/**
     * Sign out
     */
 signOut(): Observable<any>
 {
     // Remove the access token from the local storage
     localStorage.removeItem('access_token');

     // Set the authenticated flag to false
     this._authenticated = false;

     // Return the observable
     return of(true);
 }

 /**
  * Sign up
  *
  * @param user
  */
 signUp(user: { name: string, email: string, password: string, company: string }): Observable<any>
 {
     return this._httpClient.post('api/auth/sign-up', user);
 }

 /**
  * Unlock session
  *
  * @param credentials
  */
 unlockSession(credentials: { email: string, password: string }): Observable<any>
 {
     return this._httpClient.post('api/auth/unlock-session', credentials);
 }

 /**
  * Check the authentication status
  */
 check(): Observable<boolean>
 {
     // Check if the user is logged in
     if ( this._authenticated )
     {
         return of(true);
     }

     // Check the access token availability
     if ( !this.accessToken )
     {
         return of(false);
     }

     // Check the access token expire date
     if ( AuthUtils.isTokenExpired(this.accessToken) )
     {
         return of(false);
     }

     // If the access token exists and it didn't expire, sign in using it
     return this.signInUsingToken();
 }
}




