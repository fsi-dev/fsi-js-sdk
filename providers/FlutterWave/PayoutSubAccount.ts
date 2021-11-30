import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/subaccounts/payout-subaccounts';

const createASubAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix;
    return apiCall(url,'POST', secretKey, body, headers);
}

const fetchASubAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 's';
    return apiCall(url,'GET', secretKey, body, headers);
}

const fetchSubAccounts: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix;
    return apiCall(url,'GET', secretKey, body, headers);
}

const updateSubAccounts: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix;
    return apiCall(url,'PUT', secretKey, body, headers);
}

const fetchTransactions: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `/${routeParam}/transactions`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const fetchBalance: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `/${routeParam}/balances`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const fetchStaticVirtualAccounts: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `/${routeParam}/static-account`;
    return apiCall(url,'GET', secretKey, body, headers);
}

export { createASubAccount, fetchASubAccount, fetchSubAccounts, updateSubAccounts, 
        fetchTransactions, fetchBalance, fetchStaticVirtualAccounts };