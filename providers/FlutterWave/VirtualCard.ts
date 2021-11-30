import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface, ApiCallMultiParamsInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/virtual-cards/';

const createVirtualCard: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix;
    return apiCall(url,'POST', secretKey, body, headers);
}

const getAllVirtualCards: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getAVirtualCard: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

const fundAVirtualCard: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `${routeParam}/fund`;
    return apiCall(url,'POST', secretKey, body, headers);
}

const terminateAVirtualCard: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `${routeParam}/terminate`;
    return apiCall(url,'PUT', secretKey, body, headers);
}

const getAVirtualCardTransactions: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `${routeParam}/transactions`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const withdrawFromAVirtualCard: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `${routeParam}/withdraw`;
    return apiCall(url,'POST', secretKey, body, headers);
}

const blockOrUnblockVirtualCard: ApiCallMultiParamsInterface = (secretKey: string, body: object, headers: object|null, routeParam: any = {}) => {
    let url: string = providerPrefix + `${routeParam.id}/status/${routeParam.status_action}`;
    return apiCall(url,'PUT', secretKey, body, headers);
}

export { createVirtualCard, getAllVirtualCards, getAVirtualCard, fundAVirtualCard, terminateAVirtualCard, 
        getAVirtualCardTransactions, withdrawFromAVirtualCard, blockOrUnblockVirtualCard };