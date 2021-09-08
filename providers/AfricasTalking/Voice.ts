import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'v1/africastalking';

const voiceCall: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + '/voice/call';
    return apiCall(url,'POST', secretKey, body);
}

const queueStatus: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + '/voice/queueStatus';
    return apiCall(url,'POST', secretKey, body);
}

const mediaUpload: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + '/voice/mediaUpload';
    return apiCall(url,'POST', secretKey, body);
}


export { voiceCall, queueStatus, mediaUpload };