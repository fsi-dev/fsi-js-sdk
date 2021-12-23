import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'wema/crowdfunding/';

const profiles: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, id?: string|number) => {
    let url: string = providerPrefix + 'Profiles/' + id;
    return apiCall(url,'PATCH', secretKey, body, headers);
}

const authenticate: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/authenticate';
    return apiCall(url,'POST', secretKey, body, headers);
}

const changePassword: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/change_password';
    return apiCall(url,'POST', secretKey, body, headers);
}

const confirmChangeUserEmail: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/confirm_email_change';
    return apiCall(url,'POST', secretKey, body, headers);
}

const verifyUsername: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/verify/username';
    return apiCall(url,'POST', secretKey, body, headers);
}

const verifyEmail: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/verify/email';
    return apiCall(url,'POST', secretKey, body, headers);
}

const verifyAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/confirm_account';
    return apiCall(url,'POST', secretKey, body, headers);
}

const editCorporateDetails: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, id?: string|number) => {
    let url: string = providerPrefix + 'corporates/' + id;
    return apiCall(url,'PATCH', secretKey, body, headers);
}

const changeEmail: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/change_email';
    return apiCall(url,'POST', secretKey, body, headers);
}

const forgotPassword: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/forgot_password';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getCorporateDetails: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, id?: string|number) => {
    let url: string = providerPrefix + 'corporates/' + id;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getProfile: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Profiles/me';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getAccountDetails: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/me';
    return apiCall(url,'GET', secretKey, body, headers);
}

const personalVerification: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Verification/personal';
    return apiCall(url,'GET', secretKey, body, headers);
}

const corporateAccountDetails: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Verification/corporate/directors';
    return apiCall(url,'GET', secretKey, body, headers);
}

const corporateAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Verification/corporate';
    return apiCall(url,'GET', secretKey, body, headers);
}

const personalAccounts: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Verification/personal/accounts';
    return apiCall(url,'GET', secretKey, body, headers);
}

const registerCorporate: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/register/corporate';
    return apiCall(url,'POST', secretKey, body, headers);
}

const registerProfile: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/register';
    return apiCall(url,'POST', secretKey, body, headers);
}

const sendRequest: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Verification/request';
    return apiCall(url,'GET', secretKey, body, headers);
}

const resetAccountPassword: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Account/reset_password';
    return apiCall(url,'POST', secretKey, body, headers);
}

const updateCorporateManager: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Verification/corporate/manager';
    return apiCall(url,'PATCH', secretKey, body, headers);
}

const updatePersonalAccountNumber: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Verification/personal/account';
    return apiCall(url,'PATCH', secretKey, body, headers);
}

const verifyOTP: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'Verification/verifyotp';
    return apiCall(url,'POST', secretKey, body, headers);
}

let CrowdFunding = { profiles, authenticate, changePassword, confirmChangeUserEmail, verifyUsername, verifyEmail, verifyAccount, 
    editCorporateDetails, changeEmail, forgotPassword, getCorporateDetails, getProfile, getAccountDetails, personalVerification, 
    corporateAccountDetails, corporateAccount, personalAccounts, registerCorporate, registerProfile,  sendRequest, 
    resetAccountPassword, updateCorporateManager, updatePersonalAccountNumber, verifyOTP };

export default CrowdFunding;