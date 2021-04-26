import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    IChangeCryptoSettings,
    IGenericHttpReponse,
    IGetCustomnerListPerStatusResponse,
    ISaveCryptoSellingPrice,
    IUpdateCountryFeatureStatus,
    IUpdateCountryStatus,
    IUpdateCryptoBalance,
    IUpdateCryptoUsdSellingPrice,
    IUpdateCustomerLoyaltyLevel
} from './admin';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private httpClient: HttpClient) { }

    saveCryptoSellingPrice = (payload: ISaveCryptoSellingPrice): Observable<IGenericHttpReponse> => {
        return this.httpClient.post<IGenericHttpReponse>('endpoint', payload);
    }

    changeCryptoSettings = (payload: IChangeCryptoSettings): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    updateCryptoBalance = (payload: IUpdateCryptoBalance): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    updateCryptoUsdPrice = (payload: IUpdateCryptoUsdSellingPrice): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    updateCustomerLoyaltyLevel = (payload: IUpdateCustomerLoyaltyLevel): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    updateCountryFeatureStatus = (payload: IUpdateCountryFeatureStatus): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    updateCountryStatus = (payload: IUpdateCountryStatus): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    getCustomerListPerStatus = (params: HttpParams): Observable<IGetCustomnerListPerStatusResponse> => {
        return this.httpClient.get<IGetCustomnerListPerStatusResponse>('endpoint', { params });
    }
}
