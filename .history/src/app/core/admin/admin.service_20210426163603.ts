import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeCryptoSettingsPayload, GenericHttpReponse, SaveCryptoSellingPricePayload, UpdateCryptoBalancePayload } from './admin';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private httpClient: HttpClient) { }

    updateCrypto(payload: UpdateCryptoBalancePayload): Observable<GenericHttpReponse> {
        return this.httpClient.put<GenericHttpReponse>('endpoint', payload);
    }

    changeCryptoSettings = (payload: ChangeCryptoSettingsPayload): Observable<GenericHttpReponse> => {
        return this.httpClient.put<GenericHttpReponse>('endpoint', payload);
    }

    saveCryptoSellingPrice = (payload: SaveCryptoSellingPricePayload): Observable<GenericHttpReponse> => {
        return this.httpClient.post<GenericHttpReponse>('endpoint', payload);
    }
}
