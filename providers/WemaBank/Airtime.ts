import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'wema/airtime/api/OpenApi/';

const getDataPlans: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'GetDataPlans';
    return apiCall(url,'GET', secretKey, body, headers);
}

const purchaseAirtime: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'PurchaseAirtime';
    return apiCall(url,'POST', secretKey, body, headers);
}

const purchaseData: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'PurchaseData';
    return apiCall(url,'POST', secretKey, body, headers);
}

let Airtime = { getDataPlans, purchaseAirtime, purchaseData };

export default Airtime;