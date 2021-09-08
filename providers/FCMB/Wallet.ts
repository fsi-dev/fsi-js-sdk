import apiCall from "../../helpers/rest";
import { Methods } from "../../config/Constants";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'fcmb/wallet/';

const customerWalletBalance: ApiCallMethodInterface = (secretKey: string, body: object, header?:object ) => {
    let url: string = providerPrefix + 'Customerwallet/Balance';
    return apiCall(url, Methods.GET, secretKey, body, header);
}

const newWallet: ApiCallMethodInterface = (secretKey: string, body: object, header?:object ) => {
    let url: string = providerPrefix + 'Customerwallet/new';
    return apiCall(url, Methods.POST, secretKey, body, header);
}
const walletStatus: ApiCallMethodInterface = (secretKey: string, body: object, header?:object ) => {
    let url: string = providerPrefix + 'Customerwallet/Status';
    return apiCall(url, Methods.PUT, secretKey, body, header);
}
const validateCode: ApiCallMethodInterface = (secretKey: string, body: object, header?:object ) => {
    let url: string = providerPrefix + 'validateCode';
    return apiCall(url, Methods.GET, secretKey, body, header);
}

export { customerWalletBalance, newWallet, walletStatus, validateCode };