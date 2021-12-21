import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'axamansard/life';

const getLifeQuotes: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/quotes';
    return apiCall(url,'POST', secretKey, body, headers);
}

const policyTypes: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/policy-types';
    return apiCall(url,'GET', secretKey, body, headers);
}

const bookLifePolicy: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/book-life-policy';
    return apiCall(url,'POST', secretKey, body, headers);
}

let Life = { getLifeQuotes, policyTypes, bookLifePolicy };

export default Life;