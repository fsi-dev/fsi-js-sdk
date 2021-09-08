import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'woven/';

const getAllSettlements: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'settlements';
    return apiCall(url,'GET', secretKey, body, header);
}

const getSettlementBreakdown: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'settlements/RDFeasdfa/transactions';
    return apiCall(url,'GET', secretKey, body, header);
}

export { getAllSettlements, getSettlementBreakdown };