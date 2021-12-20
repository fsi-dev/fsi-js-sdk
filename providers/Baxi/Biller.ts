import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'baxipay/billers';

const allProviders: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/provider/all';
    return apiCall(url,'GET', secretKey, body, headers);
}
const listServices: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/account/balance';
    return apiCall(url,'GET', secretKey, body, headers);
}

const allCategories: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/services/refresh';
    return apiCall(url,'GET', secretKey, body, headers);
}

const servicesCategory: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/services/refresh';
    return apiCall(url,'GET', secretKey, body, headers);
}

let Biller = { allProviders, listServices, allCategories, servicesCategory };

export default Biller;