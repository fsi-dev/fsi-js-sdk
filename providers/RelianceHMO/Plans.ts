import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'relianceHMO';

const getPlans: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/plans';
    return apiCall(url,'GET', secretKey, body, headers);
}

const signupCompany: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/clients/signup';
    return apiCall(url,'POST', secretKey, body, headers);
}

const signupIndividual: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/retail/signup';
    return apiCall(url,'POST', secretKey, body, headers);
}

const signupEnrollees: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + `/enrollees`;
    return apiCall(url,'POST', secretKey, body, headers);
}

const renewCompanySubscription: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, company_code?: string|number) => {
    let url: string = providerPrefix + `/clients/${company_code}/renew`;
    return apiCall(url,'PUT', secretKey, body, headers);
}

const renewIndividualSubscription: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + `/retail/renew`;
    return apiCall(url,'PUT', secretKey, body, headers);
}

const getProviders: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + `/utilities/providers`;
    return apiCall(url,'PUT', secretKey, body, headers);
}

const states: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object) => {
    let url: string = providerPrefix + `/utilities/states`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const benefits: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object) => {
    let url: string = providerPrefix + `/utilities/benefits`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getTitles: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object) => {
    let url: string = providerPrefix + `/utilities/titles`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getOccupation: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object) => {
    let url: string = providerPrefix + `/utilities/occupations`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const maritalStatus: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object) => {
    let url: string = providerPrefix + `/utilities/occupations`;
    return apiCall(url,'GET', secretKey, body, headers);
}

let Plans = { getPlans, signupCompany, signupIndividual, signupEnrollees, renewCompanySubscription, renewIndividualSubscription, getProviders, states, benefits, 
    getTitles, getOccupation, maritalStatus };

export default Plans;