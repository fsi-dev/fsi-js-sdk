import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const getAllTransactions: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transactions';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getTransactionFee: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transactions/fee';
    return apiCall(url,'GET', secretKey, body, headers);
}

const resendTransactionWebhook: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transactions/resend-hook';
    return apiCall(url,'POST', secretKey, body, headers);
}

const initiateTransactionRefund: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transactions/refund';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getTransactionRefund: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'refunds';
    return apiCall(url,'GET', secretKey, body, headers);
}

const verifyTransaction: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transactions/verify';
    return apiCall(url,'GET', secretKey, body, headers);
}

const viewTransactionTimeline: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transactions/events';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getAllRefunds: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'refunds';
    return apiCall(url,'GET', secretKey, body, headers);
}

export { getAllTransactions, getTransactionFee, resendTransactionWebhook, 
    initiateTransactionRefund, getTransactionRefund, verifyTransaction, 
    viewTransactionTimeline, getAllRefunds };