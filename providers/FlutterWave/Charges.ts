import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const capturePreAuthCharge: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'charges';
    return apiCall(url,'POST', secretKey, body, headers);
}

const voidPreAuthCharge: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'GET', secretKey, body, headers);
}

const refundPreAuthCharge: ApiCallMethodInterface = async (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return await apiCall(url,'POST', secretKey, body, headers);
}

export { capturePreAuthCharge, voidPreAuthCharge, refundPreAuthCharge };