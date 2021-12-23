import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'wema/alatpay-bt/api/v1/bankTransfer/';

const getSettlementRecord: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'settlements';
    return apiCall(url,'GET', secretKey, body, headers);
}

const performBulkSettlement: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'settlements/performBulkSettlement';
    return apiCall(url,'POST', secretKey, body, headers);
}

const virtualAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'virtualAccount';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getTransactionDetails: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, transactionId?: string|number) => {
    let url: string = providerPrefix + 'transactions/' + transactionId;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getAllActiveVirtualAccounts: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, merchantId?: string|number) => {
    let url: string = providerPrefix + 'virtualAccount/merchants/' + merchantId + '/active';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getMerchantTransactions: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, merchantId?: string|number) => {
    let url: string = providerPrefix + 'transactions/merchants/' + merchantId;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getVirtualAccountName: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'nip/accountLookup';
    return apiCall(url,'POST', secretKey, body, headers);
}

const listenToPaymentTransaction: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transactions/notification';
    return apiCall(url,'GET', secretKey, body, headers);
}

const transactionNotifications: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'nip/transactionNotification';
    return apiCall(url,'POST', secretKey, body, headers);
}

let AlatBankTransfer = { getSettlementRecord, performBulkSettlement, virtualAccount, getTransactionDetails, getAllActiveVirtualAccounts, 
    getMerchantTransactions, getVirtualAccountName, listenToPaymentTransaction, transactionNotifications };

export default AlatBankTransfer;