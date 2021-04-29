export interface GenericHttpReponse {
    responseCode: String;
    message: String;
}

export interface UpdateCryptoBalancePayload {
    cryptoIsoAlphaCode: String;
    amount: Number;
}

export interface ChangeCryptoSettingsPayload {
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



