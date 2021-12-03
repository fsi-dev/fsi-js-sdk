import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const createTransfer: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transfers';
    return apiCall(url,'POST', secretKey, body, headers);
}

const retryTransfer: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `transfers/${routeParam}/retries`;
    return apiCall(url,'POST', secretKey, body, headers);
}

const createBulkTransfer: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'bulk-transfers';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getTransferFee: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transfers/fee';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getAllTransfers: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transfers';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getATransfer: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'transfers/' + routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}
const getATransferRetry: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `transfers/${routeParam}/retries`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const checkTransferRates: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transfers/rates';
    return apiCall(url,'GET', secretKey, body, headers);
}

let Transfer = { checkTransferRates, getATransferRetry, getATransfer, 
        getAllTransfers, getTransferFee, createBulkTransfer, retryTransfer, createTransfer };
        
export default Transfer;