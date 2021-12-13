import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const allSettlements: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'settlements';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getASettlement: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'settlements/'+ routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

let Settlements =  { allSettlements, getASettlement };

export default Settlements;