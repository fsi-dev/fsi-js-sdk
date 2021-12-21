import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'axamansard';

const getCountries: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getCountries';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getMaritalStatus: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/maritalStatus';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getLgas: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/lga';
    return apiCall(url,'GET', secretKey, body, headers);
}

const beneficiaryTypes: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/beneficiaryTypes';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getReligions: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/religion';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getTitles: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/titles';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getStates: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/states';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getRelationships: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/relationships';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getNationality: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getNationality';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getPurposeOfTrip: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getPurposeOfTrip';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getTravelPolicyTypes: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getTravelPolicyTypes';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getPlans: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getPlans';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getOccupations: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getOccupations';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getPlansByID: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getPlansByID';
    return apiCall(url,'GET', secretKey, body, headers);
}

let Setup = { getCountries, getMaritalStatus, getLgas, beneficiaryTypes, getTitles, getStates, getReligions,
        getRelationships, getNationality, getPurposeOfTrip, getTravelPolicyTypes, getPlans,
        getOccupations, getPlansByID };

export default Setup;