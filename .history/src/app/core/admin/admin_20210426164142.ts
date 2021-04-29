export interface IGenericHttpReponse {
    responseCode: String;
    message: String;
}

export interface IUpdateCryptoBalancePayload {
    cryptoIsoAlphaCode: String;
    amount: Number;
}

export interface IChangeCryptoSettingsPayload {
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

export interface ISaveCryptoSellingPricePayload {
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

export interface IUpdateCustomerLoyaltyLevelPayload {
    loyaltyLevelId: Number;
    customerId: Number;
}




