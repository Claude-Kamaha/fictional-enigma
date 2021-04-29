export interface IGenericHttpReponse {
    responseCode: String;
    message: String;
}

export interface IUpdateCryptoBalance {
    cryptoIsoAlphaCode: String;
    amount: number;
}

export interface IChangeCryptoSettings {
    cryptoIsoAlphaCode: String;
    minBuyFiat?: number;
    minSellFiat?: number;
    minBuyCrypto?: number;
    minSellCrypto?: number;
    maxSellCrypto?: number;
    buy_sender_address?: String;
    sell_recipient_address?: String;
    blockchainUrl?: String;
}

export interface ISaveCryptoSellingPrice {
    cryptoIsoAlphaCode: String;
    transactionType: number;
    customerType: number;
    usdSellingPrice: number;
    dateBegin: number;
    amountMin?: number;
    amountMax?: number;
    amountMinCrypto?: number;
    amountMaxCrypto?: number;
    rate?: number;
    priceSpread?: number;
    gasFees?: number;
    ejaraRate?: number;
    forCrypto?: number;
}

export interface IUpdateCustomerLoyaltyLevel {
    loyaltyLevelId: number;
    customerId: number;
}

export interface IUpdateCryptoUsdSellingPrice {
    cryptoIsoAlphaCode: number;
    amount: number;
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
    data: {
        customer_id: number,
        username: 'ejaraTester',
        phone_number: '233201694902',
        referal_code: 'FW-Ad4TwHHS3e-9B3bpdruJqYVDKA-Zc',
        creation_date: 1619522063665,
        first_name: 'Kingsley',
        last_name: 'Ofosu',
        gender: '',
        email_address: 'kingsleykofosuk@gmail.com',
        date_of_birth: '1800-09-29',
        LANGUAGE: 'fr',
        status: 'confirmed',
        type: 'tester',
        loyalty_level: 1,
        loyalty_level_description: null,
        short_country_code: 'GH',
        country_code: 'GHA',
        country_name_en: 'Ghana',
        country_name_fr: 'Ghana',
        customer_label: 'migrated',
        manager: null,
        godfather: null,
        kyclevel: 1,
        kyclevelname: 'basic',
        fiat_balance: 0
    }[];
}
