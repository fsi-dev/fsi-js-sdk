import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'wema/open-bills/api/OpenApiBills/';

const getAllBillsAndPackages: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'GetAllBills';
    return apiCall(url,'GET', secretKey, body, headers);
}

const validateCustomer: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'ValidateCustomer';
    return apiCall(url,'POST', secretKey, body, headers);
}

const payBill: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'payBill';
    return apiCall(url,'POST', secretKey, body, headers);
}

let OpenBillsPayment = { getAllBillsAndPackages, validateCustomer, payBill };

export default OpenBillsPayment;