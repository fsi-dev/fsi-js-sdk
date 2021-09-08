import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../config/Constants";

const providerPrefix = 'eco/corporateapi/';

const tokenGeneration: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'user/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const cardPayment: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'merchant/card';
    return apiCall(url,'POST', secretKey, body, headers);
}

const momoPayment: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'merchant/momo';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getMcc: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'merchant/getmcc';
    return apiCall(url,'POST', secretKey, body, headers);
}

const merchantQRCreation: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'merchant/createqr';
    return apiCall(url,'POST', secretKey, body, headers);
}


export { tokenGeneration, cardPayment, momoPayment, getMcc, merchantQRCreation };