import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'union';

const generateAccessToken: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/oauth/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const accountEnquiry: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/secured/cbaaccountenquiry';
    return apiCall(url,'POST', secretKey, body, headers);
}

const customerEnquiry: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/secured/cbacustomerenquiry';
    return apiCall(url,'POST', secretKey, body, headers);
}

const customerAccountEnquiry: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/secured/cbacustomeraccountenquiry';
    return apiCall(url,'POST', secretKey, body, headers);
}

const changeUserCredentials: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/secured/changeusercredentials';
    return apiCall(url,'POST', secretKey, body, headers);
}


let Union = { generateAccessToken, accountEnquiry, customerEnquiry, customerAccountEnquiry, changeUserCredentials };

export default Union;