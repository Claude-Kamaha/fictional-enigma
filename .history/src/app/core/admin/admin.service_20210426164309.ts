import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    IChangeCryptoSettingsPayload,
    IGenericHttpReponse,
    ISaveCryptoSellingPricePayload,
    IUpdateCryptoBalancePayload,
    IUpdateCustomerLoyaltyLevelPayload
} from './admin';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private httpClient: HttpClient) { }

    updateCryptoBalance = (payload: IUpdateCryptoBalancePayload): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    changeCryptoSettings = (payload: IChangeCryptoSettingsPayload): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    saveCryptoSellingPrice = (payload: ISaveCryptoSellingPricePayload): Observable<IGenericHttpReponse> => {
        return this.httpClient.post<IGenericHttpReponse>('endpoint', payload);
    }

    updateCustomerLoyaltyLevel = (payload: IUpdateCustomerLoyaltyLevelPayload): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }
}
