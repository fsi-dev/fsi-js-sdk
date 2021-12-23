import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'axamansard/api';

const downloadCertificate: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/DownloadCertificate';
    return apiCall(url,'GET', secretKey, body, headers);
}

const downloadTravelCertificate: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, certId?: string|number) => {
    let url: string = providerPrefix + '/certificate/travel/download/' + certId;
    return apiCall(url,'GET', secretKey, body, headers);
}

const downloadMotorCertificate: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, transactionReference?: string|number) => {
    let url: string = providerPrefix + '/certificates/motor/download/' + transactionReference;
    return apiCall(url,'GET', secretKey, body, headers);
}

const postTravelCertificate: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, transactionReference?: string|number) => {
    let url: string = providerPrefix + '/certificates/travel/send-certificate/' + transactionReference;
    return apiCall(url,'POST', secretKey, body, headers);
}

const postMotorCertificate: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, transactionReference?: string|number) => {
    let url: string = providerPrefix + '/certificates/motor/send-certificate/' + transactionReference;
    return apiCall(url,'POST', secretKey, body, headers);
}

let Certificate = { downloadCertificate , downloadTravelCertificate, downloadMotorCertificate, postTravelCertificate, postMotorCertificate };

export default Certificate;