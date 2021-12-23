import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'wema/alatpay-pc/api/v1/paymentCard/';

const getSettlementRecord: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'settlements';
    return apiCall(url,'GET', secretKey, body, headers);
}

const performBulkSettlementAction: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'settlements/performBulkSettlement';
    return apiCall(url,'POST', secretKey, body, headers);
}

const initializeCardPayment: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'mc/initialize';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getTransactionDetails: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, businessId?: string|number) => {
    let url: string = providerPrefix + 'businesses/' + businessId;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getMerchantTransactions: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, merchantId?: string|number) => {
    let url: string = providerPrefix + 'transactions/merchants/' + merchantId;
    return apiCall(url,'GET', secretKey, body, headers);
}

const authenticateCardPayment: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'mc/authenticate';
    return apiCall(url,'POST', secretKey, body, headers);
}
const listenToATransaction: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'transactions/notification';
    return apiCall(url,'GET', secretKey, body, headers);
}
const transactionCallback: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'mc/authenticate/callback';
    return apiCall(url,'POST', secretKey, body, headers);
}

let AlatPayPaymentCard = { getSettlementRecord, performBulkSettlementAction, initializeCardPayment, getTransactionDetails, getMerchantTransactions,
    authenticateCardPayment, listenToATransaction, transactionCallback };

export default AlatPayPaymentCard;