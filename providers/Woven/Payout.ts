import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'woven/';

const listTransactions: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'vnubans/create_customer';
    return apiCall(url,'POST', secretKey, body, header);
}


export { listTransactions };