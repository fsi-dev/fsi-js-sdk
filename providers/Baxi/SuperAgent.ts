import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'baxipay/superagent';

const requery: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/transaction/requery';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getBalance: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/account/balance';
    return apiCall(url,'GET', secretKey, body, headers);
}

const refreshServices: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/services/refresh';
    return apiCall(url,'GET', secretKey, body, headers);
}

let SuperAgent = { requery, getBalance, refreshServices };

export default SuperAgent;