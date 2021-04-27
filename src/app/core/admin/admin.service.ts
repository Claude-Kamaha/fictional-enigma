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
    IGetCustomerWalletsResponse,
    IManualBuy,
    IManualBuyPaymentUpdate,
    IManualDeposit,
    IManualTransactionResponse,
    IMigrateFiatWallet,
    IRevertManualTransaction,
    ISaveCryptoSellingPrice,
    ISaveMigrationData,
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
        return this.httpClient.post<IGenericReponse>(`/api/v1/admin/save-crypto-selling-price`, payload);
    }

    changeCryptoSettings = (payload: IChangeCryptoSettings): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>(`/api/v1/admin/change-crypto-settings`, payload);
    }

    updateCryptoBalance = (payload: IUpdateCryptoBalance): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>(`/api/v1/admin/update-crypto-balance`, payload);
    }

    updateCryptoUsdPrice = (payload: IUpdateCryptoUsdSellingPrice): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>(`/api/v1/admin/update-crypto-usd-price`, payload);
    }


    // customer and others related methods
    createCustomerFiatWallet = (payload: ICreateCustomerFiatWallet): Observable<ICreateCustomerFiatWalletResponse> => {
        return this.httpClient.post<ICreateCustomerFiatWalletResponse>(`/api/v1/admin/create-fiat-wallet-for-customer`, payload);
    }

    getCustomerListPerStatus = (params: HttpParams): Observable<IGetCustomerListPerStatusResponse> => {
        return this.httpClient.get<IGetCustomerListPerStatusResponse>(`/api/v1/admin/get-customer-list-per-status`, { params });
    }

    getCustomerDetails = (params: HttpParams): Observable<IGetCustomerDetailsResponse> => {
        return this.httpClient.get<IGetCustomerDetailsResponse>(`/api/v1/admin/get-customer-details`, { params });
    }

    getCustomerWallets = (params: HttpParams): Observable<IGetCustomerWalletsResponse> => {
        return this.httpClient.get<IGetCustomerWalletsResponse>(`/api/v1/admin/get-customer-wallets`, { params });
    }

    updateCustomerLoyaltyLevel = (payload: IUpdateCustomerLoyaltyLevel): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>(`/api/v1/admin/update-customer-loyalty-level`, payload);
    }

    changeCustomerType = (payload: IChangeCustomerType): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>(`/api/v1/admin/change-customer-type`, payload);
    }

    changeUserStatus = (payload: IChangeUserStatus): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>(`/api/v1/admin/change-user-status`, payload);
    }

    updateCountryFeatureStatus = (payload: IUpdateCountryFeatureStatus): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>(`/api/v1/admin/update-country-feature-status`, payload);
    }

    updateCountryStatus = (payload: IUpdateCountryStatus): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>(`/api/v1/admin/update-country-status`, payload);
    }

    migrateFiatWallet = (payload: IMigrateFiatWallet): Observable<IGenericReponse> => {
        return this.httpClient.post<IGenericReponse>(`/api/v1/admin/migrate-fiat-wallet`, payload);
    }

    // transactions related methods
    saveMigrationData = (payload: ISaveMigrationData): Observable<IGenericReponse> => {
        return this.httpClient.post<IGenericReponse>(`/api/v1/admin/save-migration-data`, payload);
    }

    manualDeposit = (payload: IManualDeposit): Observable<IManualTransactionResponse> => {
        return this.httpClient.post<IManualTransactionResponse>(`/api/v1/admin/manual-deposit`, payload);
    }

    manualBuy = (payload: IManualBuy): Observable<IManualTransactionResponse> => {
        return this.httpClient.post<IManualTransactionResponse>(`/api/v1/admin/manual-buy`, payload);
    }

    manualBuyPaymentUpdate = (payload: IManualBuyPaymentUpdate): Observable<IGenericReponse> => {
        return this.httpClient.post<IGenericReponse>(`/api/v1/admin/manual-buy-payment-update`, payload);
    }

    revertManualTransaction = (payload: IRevertManualTransaction): Observable<IGenericReponse> => {
        return this.httpClient.post<IGenericReponse>(`/api/v1/admin/revert-manual-transaction`, payload);
    }

    changeMoonpaySettings = (payload: IChangeMoonpaySettings): Observable<IGenericReponse> => {
        return this.httpClient.put<IGenericReponse>(`/api/v1/admin/change-moonpay-settings`, payload);
    }

    deleteTransaction = (params: HttpParams): Observable<IGenericReponse> => {
        return this.httpClient.delete<IGenericReponse>(`/api/v1/admin/delete-transaction`, { params });
    }
}
