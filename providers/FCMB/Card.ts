import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'fcmb/cards';

const cardType: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + '/cardType';
    return apiCall(url,'POST', secretKey, body);
}

const cardRequest: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + '/cardRequest';
    return apiCall(url,'POST', secretKey, body);
}

export { cardType, cardRequest };