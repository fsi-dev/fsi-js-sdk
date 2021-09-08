import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'woven/';

const listTransactions: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'transactions';
    return apiCall(url,'GET', secretKey, body, header);
}

const fetchTransactions: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'transactions';
    return apiCall(url,'GET', secretKey, body, header);
}

export { listTransactions, fetchTransactions };