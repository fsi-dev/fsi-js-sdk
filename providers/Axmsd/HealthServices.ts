import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'axamansard';

const getHospitals: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/hospital-states';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getTown: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, state?: any) => {
    let url: string = providerPrefix  + state + '/hospital-town';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getCondition: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/get-conditions';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getPlans: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/get-plans';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getGender: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/get-gender';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getGenotype: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/get-genotype';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getOwnershipType: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/get-OwnerShipType';
    return apiCall(url,'GET', secretKey, body, headers);
}

const postHealthTransactions: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/health/transaction';
    return apiCall(url,'POST', secretKey, body, headers);
}

const postProcessHealth: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/process-health';
    return apiCall(url,'POST', secretKey, body, headers);
}

let HealthServices = { getHospitals , getTown, getCondition, getPlans, getGender, getGenotype,
    getOwnershipType, postHealthTransactions, postProcessHealth };

export default HealthServices;