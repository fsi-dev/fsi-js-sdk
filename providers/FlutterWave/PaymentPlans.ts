import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const createPaymentPlan: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'payment-plans';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getPaymentPlans: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'payment-plans';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getAPaymentPlan: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'payment-plans/' + routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

const updateAPaymentPlan: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'payment-plans/' + routeParam + '/cancel';
    return apiCall(url,'PUT', secretKey, body, headers);
}

const cancelAPaymentPlan: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'payment-plans';
    return apiCall(url,'PUT', secretKey, body, headers);
}

let PaymentPlans = { createPaymentPlan, getPaymentPlans, getAPaymentPlan, updateAPaymentPlan, cancelAPaymentPlan };

export default PaymentPlans;