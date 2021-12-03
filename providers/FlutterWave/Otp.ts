import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const otps: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'otps';
    return apiCall(url,'POST', secretKey, body, headers);
}

const validateOTP: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `otps/${routeParam}/validate/`;
    return apiCall(url,'POST', secretKey, body, headers);
}

export { otps, validateOTP };