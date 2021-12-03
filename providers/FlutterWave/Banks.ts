import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const getAllBanks: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'banks/' + routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getBankBranches: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'banks/'+ routeParam + 'branches';
    return apiCall(url,'GET', secretKey, body, headers);
}

export { getAllBanks, getBankBranches};