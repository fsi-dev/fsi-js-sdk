import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const getBillPaymentAgencies: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'billers';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getAgencyProducts: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `billers/${routeParam}/products`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getProductAmount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam: any = {}) => {
    let url: string = providerPrefix + `billers/${routeParam.biller_code}/products/${routeParam.product_code}`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const createOrder: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam: any = {}) => {
    let url: string = providerPrefix + `billers/${routeParam.biller_code}/products/${routeParam.product_code}`;
    return apiCall(url,'POST', secretKey, body, headers);
}

const updateOrder: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'payment-plans';
    return apiCall(url,'PUT', secretKey, body, headers);
}

export { getBillPaymentAgencies, getAgencyProducts, getProductAmount, createOrder, updateOrder };