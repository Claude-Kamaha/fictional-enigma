export interface IGenericHttpReponse {
    responseCode: String;
    message: String;
}

export interface IUpdateCryptoBalance {
    cryptoIsoAlphaCode: String;
    amount: Number;
}

export interface IChangeCryptoSettings {
    cryptoIsoAlphaCode: String;
    minBuyFiat?: Number;
    minSellFiat?: Number;
    minBuyCrypto?: Number;
    minSellCrypto?: Number;
    maxSellCrypto?: Number;
    buy_sender_address?: String;
    sell_recipient_address?: String;
    blockchainUrl?: String;
}

export interface ISaveCryptoSellingPrice {
    cryptoIsoAlphaCode: String;
    transactionType: Number;
    customerType: Number;
    usdSellingPrice: Number;
    dateBegin: Number;
    amountMin?: Number;
    amountMax?: Number;
    amountMinCrypto?: Number;
    amountMaxCrypto?: Number;
    rate?: Number;
    priceSpread?: Number;
    gasFees?: Number;
    ejaraRate?: Number;
    forCrypto?: Number;
}

export interface IUpdateCustomerLoyaltyLevel {
    loyaltyLevelId: Number;
    customerId: Number;
}

export interface IUpdateCryptoUsdSellingPrice {
    cryptoIsoAlphaCode: Number;
    amount: Number;
}

export interface IUpdateCountryFeatureStatus {
    countryCode: String;
    feature: String;
    isActive: Boolean;
}

export interface IUpdateCountryStatus {
    countryCode: String;
    status: String;
}

export interface IGetCustomerListPerStatusResponse extends IGenericHttpReponse {
    data: {}[];
}
