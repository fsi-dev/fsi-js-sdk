import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const getAllBanks: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getBankBranches: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'GET', secretKey, body, headers);
}

const baseMethod = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

export { getAllBanks, getBankBranches };