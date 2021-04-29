import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericHttpReponse, UpdateCryptoBalancePayload } from './admin';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private httpClient: HttpClient) { }

    updateCrypto = (payload: UpdateCryptoBalancePayload): Observable<GenericHttpReponse> => {
        return this.httpClient.put<GenericHttpReponse>('', payload);
    }
}
