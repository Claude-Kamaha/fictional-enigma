import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    IChangeCryptoSettings,
    ICreateCustomerFiatWallet,
    ICreateCustomerFiatWalletResponse,
    IDeleteTransaction,
    IGenericHttpReponse,
    IGetCustomerDetailsResponse,
    IGetCustomerListPerStatusResponse,
    IManualBuy,
    IManualDeposit,
    IManualTransactionResponse,
    IRevertManualTransaction,
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

    // crypto related methods
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

    // customer related and others related methods
    updateCustomerLoyaltyLevel = (payload: IUpdateCustomerLoyaltyLevel): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    createCustomerFiatWallet = (payload: ICreateCustomerFiatWallet): Observable<ICreateCustomerFiatWalletResponse> => {
        return this.httpClient.post<ICreateCustomerFiatWalletResponse>('endpoint', payload);
    }

    getCustomerListPerStatus = (params: HttpParams): Observable<IGetCustomerListPerStatusResponse> => {
        return this.httpClient.get<IGetCustomerListPerStatusResponse>('endpoint', { params });
    }

    getCustomerDetails = (params: HttpParams): Observable<IGetCustomerDetailsResponse> => {
        return this.httpClient.get<IGetCustomerDetailsResponse>('endpoint', { params });
    }

    updateCountryFeatureStatus = (payload: IUpdateCountryFeatureStatus): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    updateCountryStatus = (payload: IUpdateCountryStatus): Observable<IGenericHttpReponse> => {
        return this.httpClient.put<IGenericHttpReponse>('endpoint', payload);
    }

    // transactions related methods
    manualDeposit = (payload: IManualDeposit): Observable<IManualTransactionResponse> => {
        return this.httpClient.post<IManualTransactionResponse>('endpoint', payload);
    }

    manualBuy = (payload: IManualBuy): Observable<IManualTransactionResponse> => {
        return this.httpClient.post<IManualTransactionResponse>('endpoint', payload);
    }

    revertManualTransaction = (payload: IRevertManualTransaction): Observable<IGenericHttpReponse> => {
        return this.httpClient.post<IGenericHttpReponse>('endpoint', payload);
    }

    deleteTransaction = (params: HttpParams): Observable<IGenericHttpReponse> => {
        return this.httpClient.delete<IGenericHttpReponse>('endpoint', { params });
    }
}
