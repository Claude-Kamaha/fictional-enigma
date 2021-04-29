import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    IChangeCryptoSettings,
    IChangeCustomerType,
    IChangeMoonpaySettings,
    IChangeUserStatus,
    ICreateCustomerFiatWallet,
    ICreateCustomerFiatWalletResponse,
    IDeleteTransaction,
    IGenericReponse,
    IGetCustomerDetailsResponse,
    IGetCustomerListPerStatusResponse,
    IManualBuy,
    IManualBuyPaymentUpdate,
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
    saveCryptoSellingPrice = (payload: ISaveCryptoSellingPrice): Observable<IGenericReponse> => {
        return this.httpClient.post<IGenericReponse>('endpoint', payload);
    }

    changeCryptoSettings = (payload: IChangeCryptoSettings): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>('endpoint', payload);
    }

    updateCryptoBalance = (payload: IUpdateCryptoBalance): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>('endpoint', payload);
    }

    updateCryptoUsdPrice = (payload: IUpdateCryptoUsdSellingPrice): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>('endpoint', payload);
    }


    // customer and others related methods
    createCustomerFiatWallet = (payload: ICreateCustomerFiatWallet): Observable<ICreateCustomerFiatWalletResponse> => {
        return this.httpClient.post<ICreateCustomerFiatWalletResponse>('endpoint', payload);
    }

    getCustomerListPerStatus = (params: HttpParams): Observable<IGetCustomerListPerStatusResponse> => {
        return this.httpClient.get<IGetCustomerListPerStatusResponse>('endpoint', { params });
    }

    getCustomerDetails = (params: HttpParams): Observable<IGetCustomerDetailsResponse> => {
        return this.httpClient.get<IGetCustomerDetailsResponse>('endpoint', { params });
    }

    updateCustomerLoyaltyLevel = (payload: IUpdateCustomerLoyaltyLevel): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>('endpoint', payload);
    }

    changeCustomerType = (payload: IChangeCustomerType): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>('endpoint', payload);
    }

    changeUserStatus = (payload: IChangeUserStatus): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>('endpoint', payload);
    }

    updateCountryFeatureStatus = (payload: IUpdateCountryFeatureStatus): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>('endpoint', payload);
    }

    updateCountryStatus = (payload: IUpdateCountryStatus): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>('endpoint', payload);
    }


    // transactions related methods
    manualDeposit = (payload: IManualDeposit): Observable<IManualTransactionResponse> => {
        return this.httpClient.post<IManualTransactionResponse>('endpoint', payload);
    }

    manualBuy = (payload: IManualBuy): Observable<IManualTransactionResponse> => {
        return this.httpClient.post<IManualTransactionResponse>('endpoint', payload);
    }

    manualBuyPaymentUpdate = (payload: IManualBuyPaymentUpdate): Observable<IGenericReponse> => {
        return this.httpClient.post<IGenericReponse>('endpoint', payload);
    }

    revertManualTransaction = (payload: IRevertManualTransaction): Observable<IGenericReponse> => {
        return this.httpClient.post<IGenericReponse>('endpoint', payload);
    }

    changeMoonpaySettings = (payload: IChangeMoonpaySettings): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>('endpoint', payload);
    }

    deleteTransaction = (params: HttpParams): Observable<IGenericReponse> => {
        return this.httpClient.delete<IGenericReponse>('endpoint', { params });
    }
}
