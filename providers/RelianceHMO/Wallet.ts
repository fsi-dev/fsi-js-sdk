import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'relianceHMO/';

const walletBalance: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'wallet';
    return apiCall(url,'GET', secretKey, body, headers);
}

const fundWallet: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'wallet/fund';
    return apiCall(url,'POST', secretKey, body, headers);
}

const allActiveEnrollees: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'enrollees';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getSingleEnrollee: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, id?: string|number) => {
    let url: string = providerPrefix + `/enrollees/${id}`;
    return apiCall(url,'GET', secretKey, body, headers);
}

let Wallet = { walletBalance, fundWallet, allActiveEnrollees, getSingleEnrollee };

export default Wallet;