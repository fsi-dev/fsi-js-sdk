import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'v1/africastalking';

const sendSms: ApiCallMethodInterface = (secretKey: string, body: object | string[]) => {
    let url: string = providerPrefix + '/version1/messaging';
    return apiCall(url,'POST', secretKey, body);
}

const generateToken: ApiCallMethodInterface = (secretKey: string, body: object | string[]) => {
    let url: string = providerPrefix + '/checkout/token/create';
    return apiCall(url,'POST', secretKey, body);
}

const createPremiumSubscription: ApiCallMethodInterface = (secretKey: string, body: object | string[]) => {
    let url: string = providerPrefix + '/version1/subscription/create';
    return apiCall(url,'POST', secretKey, body);
}

const fetchPremiumSubscriptions: ApiCallMethodInterface = (secretKey: string, body: object | string[]) => {
    let url: string = providerPrefix + '/version1/subscription';
    return apiCall(url,'GET', secretKey, body);
}

const deletePremiumSubscription: ApiCallMethodInterface = (secretKey: string, body: object | string[]) => {
    let url: string = providerPrefix + '/version1/subscription/delete';
    return apiCall(url,'POST', secretKey, body);
}
const fetchMessage: ApiCallMethodInterface = (secretKey: string, body: object | string[]) => {
    let url: string = providerPrefix + '/version1/messaging';
    return apiCall(url,'GET', secretKey, body);
}

export { sendSms, generateToken, createPremiumSubscription, deletePremiumSubscription, fetchPremiumSubscriptions, fetchMessage };