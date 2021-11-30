import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const getBillCategories: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'banks/token';
    return apiCall(url,'GET', secretKey, body, headers);
}

const validateBillService: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + `bill-items/${routeParam}/validate`;
    return apiCall(url,'GET', secretKey, body, headers);
}

const bills: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'bills';
    return apiCall(url,'GET', secretKey, body, headers);
}

const bulkBills: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'bulk-bills';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getBillStatus: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'bills/' + routeParam;
    return apiCall(url,'GET', secretKey, body, headers);
}

const getBillPayments: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'bills';
    return apiCall(url,'GET', secretKey, body, headers);
}

export { getBillCategories, validateBillService, bills, bulkBills,
         getBillStatus, getBillPayments };