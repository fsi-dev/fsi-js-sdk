import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/subaccounts/';

const createASubAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix;
    return apiCall(url,'POST', secretKey, body, headers);
}

const getSubAccounts: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix;
    return apiCall(url,'GET', secretKey, body, headers);
}

const fetchASubAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'subscriptions/' + routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

const updateASubAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'subscriptions/' + routeParam;
    return apiCall(url,'PUT', secretKey, body, headers);
}

const deleteASubAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'subaccounts/' + routeParam;
    return apiCall(url,'DELETE', secretKey, body, headers);
}

export { createASubAccount, getSubAccounts, fetchASubAccount, updateASubAccount, deleteASubAccount };