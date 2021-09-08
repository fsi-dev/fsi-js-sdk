import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'fcmb/authentication/';

const validateByCustomerId: ApiCallMethodInterface = (secretKey: string, body: object|null ) => {
    let url: string = providerPrefix + '/validateByCustomerId';
    return apiCall(url,'POST', secretKey, body);
}

const lastFourDigits: ApiCallMethodInterface = (secretKey: string, body: object|null ) => {
    let url: string = providerPrefix + '/Last4Digits';
    return apiCall(url,'POST', secretKey, body);
}

const atmPin: ApiCallMethodInterface = (secretKey: string, body: object|null ) => {
    let url: string = providerPrefix + '/AtmPIN';
    return apiCall(url,'POST', secretKey, body);
}

export { validateByCustomerId, lastFourDigits, atmPin };