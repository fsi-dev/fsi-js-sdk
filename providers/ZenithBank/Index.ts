import apiCall from "../../helpers/soap";
import { ApiCallMethodInterface } from "../../config/Constants";

const providerPrefix = 'zenith/';

const wsdlProvider: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'soap';
    return apiCall(url,'GET', secretKey, body, header);
}

const soapServer: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'vnubans';
    return apiCall(url,'POST', secretKey, body, header);
}

const encrypter: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'vnubans';
    return apiCall(url,'GET', secretKey, body, header);
}

export { wsdlProvider, encrypter, soapServer };