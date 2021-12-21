import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'axamansard';

const getQuote: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getQuote';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getTravelTransactions: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/policy-types';
    return apiCall(url,'POST', secretKey, body, headers);
}

const issueTravelPolicy: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/book-life-policy';
    return apiCall(url,'POST', secretKey, body, headers);
}

// Transaction
const getTransactions: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, id?: string|number) => {
    let url: string = providerPrefix + '/transactions/' + id;
    return apiCall(url,'GET', secretKey, body, headers);
}

let TravelAndTransaction = { getQuote, getTravelTransactions, issueTravelPolicy, getTransactions };

export default TravelAndTransaction;