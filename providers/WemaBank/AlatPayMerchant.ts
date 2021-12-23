import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'wema/alatpay-mo/api/v1/merchants/';

const addBusiness: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, merchantId?: string|number) => {
    let url: string = providerPrefix + merchantId + '/businesses';
    return apiCall(url,'POST', secretKey, body, headers);
}

const createMerchant: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix;
    return apiCall(url,'POST', secretKey, body, headers);
}

const deleteMerchant: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, merchantId?: string|number) => {
    let url: string = providerPrefix + merchantId;
    return apiCall(url,'DELETE', secretKey, body, headers);
}

const deleteBusiness: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, businessId?: string|number) => {
    let url: string = providerPrefix + 'businesses/' + businessId;
    return apiCall(url,'DELETE', secretKey, body, headers);
}

const getAllMerchants: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getBusinessInformation: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, businessId?: string|number) => {
    let url: string = providerPrefix + 'businesses/' + businessId;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getMerchantInformation: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, merchantId?: string|number) => {
    let url: string = providerPrefix + merchantId;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getMerchantBusinessesList: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, merchantId?: string|number) => {
    let url: string = providerPrefix + merchantId + '/businesses';
    return apiCall(url,'DELETE', secretKey, body, headers);
}

const updateBusiness: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, merchantId?: string|number) => {
    let url: string = providerPrefix + 'businesses/' + merchantId;
    return apiCall(url,'PUT', secretKey, body, headers);
}

const updateMerchant: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, merchantId?: string|number) => {
    let url: string = providerPrefix + merchantId;
    return apiCall(url,'PUT', secretKey, body, headers);
}

let AlatPayMerchant = { addBusiness, createMerchant, deleteMerchant, deleteBusiness, getAllMerchants,
    getBusinessInformation, getMerchantInformation, getMerchantBusinessesList, updateBusiness, updateMerchant };

export default AlatPayMerchant;