import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'wema/account-maintenance/api/AccountMaintenance/CustomerAccount/';

const getAccount: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, accountNumber?: string|number) => {
    let url: string = providerPrefix + 'GetAccountV2/accountNumber/' + accountNumber;
    return apiCall(url,'POST', secretKey, body, headers);
}

const getAccountByPhoneNumber: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, phoneNumber?: string|number) => {
    let url: string = providerPrefix + 'GetAccountByPhoneNumber/phoneNumber/' + phoneNumber;
    return apiCall(url,'GET', secretKey, body, headers);
}

const transactionHistoryV2: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/transhistoryV2';
    return apiCall(url,'POST', secretKey, body, headers);
}

let AccountMaintenence = { getAccount, getAccountByPhoneNumber, transactionHistoryV2 };

export default AccountMaintenence;