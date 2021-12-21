import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'baxipay/services';

const servicesNamefinderQuery: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/provider/all';
    return apiCall(url,'POST', secretKey, body, headers);
}

// Airtime
const airtimeProviders: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/airtime/providers';
    return apiCall(url,'GET', secretKey, body, headers);
}

const airtimeRequest: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/airtime/request';
    return apiCall(url,'POST', secretKey, body, headers);
}

// Data Bundle
const dataBundleProviders: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/databundle/providers';
    return apiCall(url,'GET', secretKey, body, headers);
}

const providerBundles: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/databundle/bundles';
    return apiCall(url,'POST', secretKey, body, headers);
}

const purchaseDatabundle: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/databundle/request';
    return apiCall(url,'POST', secretKey, body, headers);
}

// Cable TV
const cabletvProviders: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/cabletv/providers';
    return apiCall(url,'GET', secretKey, body, headers);
}

const cabletvPrefix = providerPrefix + '/multichoice';

const cabletvMultichoiceList: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = cabletvPrefix + '/list';
    return apiCall(url,'POST', secretKey, body, headers);
}

const cabletvMultichoiceAddons: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = cabletvPrefix + '/addons';
    return apiCall(url,'POST', secretKey, body, headers);
}

const cabletvMultichoiceRequest: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = cabletvPrefix + '/request';
    return apiCall(url,'POST', secretKey, body, headers);
}

// e-pin
const epinPrefix = providerPrefix + '/epin';

const epinProviders: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = epinPrefix + '/providers';
    return apiCall(url,'GET', secretKey, body, headers);
}

const epinBundles: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = epinPrefix + '/bundles';
    return apiCall(url,'POST', secretKey, body, headers);
}

const epinRequest: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = epinPrefix + '/request';
    return apiCall(url,'POST', secretKey, body, headers);
}

// Electricity
const electricityPrefix = providerPrefix + '/electricity';

const electricityBillers: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = electricityPrefix + '/billers';
    return apiCall(url,'GET', secretKey, body, headers);
}

const verifyElectricity: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = electricityPrefix + '/verify';
    return apiCall(url,'POST', secretKey, body, headers);
}

const purchaseElectricity: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = electricityPrefix + '/request';
    return apiCall(url,'POST', secretKey, body, headers);
}


let Services = { servicesNamefinderQuery, airtimeProviders, airtimeRequest, 
        dataBundleProviders, providerBundles, purchaseDatabundle,
        cabletvProviders, cabletvMultichoiceList, cabletvMultichoiceAddons, cabletvMultichoiceRequest,
        epinProviders, epinBundles, epinRequest,
        electricityBillers, verifyElectricity, purchaseElectricity };

export default Services;