import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";
import apiCall from "../../helpers/rest";

const providerPrefix = 'sterling/';

const interbankNameEnquiry: ApiCallMethodInterface = async (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'TransferAPIs/api/Spay/InterbankNameEnquiry';
    return await apiCall(url,'GET', secretKey, body, header);
};

const mobileWallet: ApiCallMethodInterface = async (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'accountapi/api/Spay/SBPMWalletRequest';
    return apiCall(url,'POST', secretKey, body, header);
}

const getBillersPaymentItems: ApiCallMethodInterface = async (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'billpaymentapi/api/Spay/GetBillerPmtItemsRequest';
    return apiCall(url,'GET', secretKey, body, header);
}

const getBillersISW: ApiCallMethodInterface = async (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'billpaymentapi/api/Spay/GetBillersISWRequest';
    return apiCall(url,'GET', secretKey, body, header);
}

export { mobileWallet, getBillersISW, interbankNameEnquiry, interbankTransfer, getBillersPaymentItems };

