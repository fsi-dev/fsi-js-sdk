import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const createBeneficiary: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'beneficiaries';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getBeneficiaries: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'beneficiaries';
    return apiCall(url,'GET', secretKey, body, headers);
}

const fetchBeneficiary: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'beneficiaries';
    return apiCall(url,'GET', secretKey, body, headers);
}

const deleteBeneficiary: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'beneficiaries';
    return apiCall(url,'DELETE', secretKey, body, headers);
}

export { createBeneficiary, getBeneficiaries, fetchBeneficiary, deleteBeneficiary };