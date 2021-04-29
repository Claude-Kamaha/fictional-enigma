export interface UpdateCryptoBalancePayload {
    cryptoIsoAlphaCode: String;
    amount: Number;
}

export interface GenericHttpReponse {
    responseCode: String;
    message: String;
}
