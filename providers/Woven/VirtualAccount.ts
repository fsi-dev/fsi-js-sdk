import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'woven/';

const createVNubanAndCustomer: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'vnubans/create_customer';
    return apiCall(url,'POST', secretKey, body, header);
}

const createVNubanForCustomer: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'vnubans';
    return apiCall(url,'POST', secretKey, body, header);
}

const editVAccount: ApiCallMethodInterface = (secretKey: string, body: object, header?: object, routeParam?: string|number) => {
    let url: string = providerPrefix + `vnubans/${routeParam}`;
    return apiCall(url,'PUT', secretKey, body, header);
}

const fetchVirtualAccounts: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + `vnubans`;
    return apiCall(url,'GET', secretKey, body, header);
}

const lookUpVAccount: ApiCallMethodInterface = (secretKey: string, body: object, header?: object, routeParam?: string|number) => {
    let url: string = providerPrefix + `vnubans/${routeParam}`;
    return apiCall(url,'GET', secretKey, body, header);
}

const getVNubanTransactions: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'transactions';
    return apiCall(url,'GET', secretKey, body, header);
}

export { createVNubanAndCustomer, createVNubanForCustomer, getVNubanTransactions, editVAccount, lookUpVAccount, fetchVirtualAccounts };