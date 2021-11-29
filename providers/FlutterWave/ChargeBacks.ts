import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const listAllChargeBacks: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'chargebacks';
    return apiCall(url,'GET', secretKey, body, headers);
}

const update: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'chargebacks';
    return apiCall(url,'PUT', secretKey, body, headers);
}

export { listAllChargeBacks, update };