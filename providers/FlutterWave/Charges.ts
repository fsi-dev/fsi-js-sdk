import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const charges: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'charges';
    return apiCall(url,'POST', secretKey, body, headers);
}

const validateCharge: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'GET', secretKey, body, headers);
}

const chargeWithToken = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const updateTokenDetails = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const createBulkTokenizedCharge = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getBulkTokenizedCharges = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getBulkTokenizedChargesTransactions = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const capturePreAuthCharge = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const voidPreAuthCharge = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const refundPreAuthCharge = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getAllTransactions = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getTransactionFee = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const resendTransactionWebhook = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const initiateTransactionRefund = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getTransactionRefund = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const verifyTransaction = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const viewTransactionTimeline = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getAllRefunds = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'POST', secretKey, body, headers);
}

export { getAllBanks, getBankBranches };