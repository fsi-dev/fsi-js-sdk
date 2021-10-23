import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'sterling/';

const interbankNameEnquiry: ApiCallMethodInterface = async (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'TransferAPIs/api/Spay/InterbankNameEnquiry';
    return await apiCall(url,'GET', secretKey, body, header);
}

const interbankTransfer: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'accountapi/api/Spay/InterbankTransferReq';
    return apiCall(url,'POST', secretKey, body, header);
}

const mobileWallet: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'accountapi/api/Spay/SBPMWalletRequest';
    return apiCall(url,'POST', secretKey, body, header);
}

const getBillersPaymentItems: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'billpaymentapi/api/Spay/GetBillerPmtItemsRequest';
    return apiCall(url,'GET', secretKey, body, header);
}

const getBillersISW: ApiCallMethodInterface = (secretKey: string, body: object, header?: object) => {
    let url: string = providerPrefix + 'billpaymentapi/api/Spay/GetBillersISWRequest';
    return apiCall(url,'GET', secretKey, body, header);
}


export { mobileWallet, getBillersISW, interbankNameEnquiry, interbankTransfer, getBillersPaymentItems };
