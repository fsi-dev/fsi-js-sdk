import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface, ApiCallMultiParamsInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'relianceHMO/';

const uploadFile: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'upload';
    return apiCall(url,'POST', secretKey, body, headers);
}

const completeEnrolleeProfile: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'enrollees/profile';
    return apiCall(url,'PUT', secretKey, body, headers);
}

const consultations: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'consultations';
    return apiCall(url,'PUT', secretKey, body, headers);
}

const enrolleesValidation: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + `enrollees/validate`;
    return apiCall(url,'GET', secretKey, body, headers);
}

let Profiles = { uploadFile, completeEnrolleeProfile, consultations, enrolleesValidation };

export default Profiles;