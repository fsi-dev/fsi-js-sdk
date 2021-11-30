import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const getWalletBalance: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'banks/' + routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getWalletBalancePerCurrency: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'balances/'+ routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

const resolveAccountDetails: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'accounts/resolve';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getBVNDetails: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'kyc/bvns/'+ routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

const resolveCardBins: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'card-bins/'+ routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

const rates: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'rates';
    return apiCall(url,'GET', secretKey, body, headers);
}

export { getWalletBalance, getWalletBalancePerCurrency, resolveAccountDetails, getBVNDetails, resolveCardBins, rates };