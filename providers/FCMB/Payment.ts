import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'fcmb/payments/';

const bankToBankTransfers: ApiCallMethodInterface = (secretKey: string, body: object , header?: object|null) => {
    let url: string = providerPrefix + 'b2b/transfer';
    return apiCall(url,'POST', secretKey, body);
}

const bankToBankInternalTransfers: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'b2b/internal/transfers';
    return apiCall(url,'POST', secretKey, body);
}

const internalTransfers: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'internal/transfers';
    return apiCall(url,'GET', secretKey, body);
}

const internalTransferStatus: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'internal/transfers/status';
    return apiCall(url,'GET', secretKey, body);
}

const internalTransferDateRange: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'internal/transfers/DateRange';
    return apiCall(url,'GET', secretKey, body);
}

const nipTransfers: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'nip/transfers';
    return apiCall(url,'POST', secretKey, body);
}

const nipTransfersDateRange: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'nip/transfers/DateRange';
    return apiCall(url,'GET', secretKey, body);
}

const nipCharge: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'nip/charge';
    return apiCall(url,'POST', secretKey, body);
}

const nipBanks: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'nip/banks';
    return apiCall(url,'GET', secretKey, body);
}

const nipName: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'nip/name';
    return apiCall(url,'POST', secretKey, body);
}

const nipStatus: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'nip/status';
    return apiCall(url,'GET', secretKey, body);
}

const nibssStatus: ApiCallMethodInterface = (secretKey: string, body: object ) => {
    let url: string = providerPrefix + 'nip/nibss/status';
    return apiCall(url,'GET', secretKey, body);
}


export { bankToBankTransfers, bankToBankInternalTransfers, internalTransfers, internalTransferDateRange,
        nibssStatus, nipStatus, nipName, internalTransferStatus, nipTransfers, nipTransfersDateRange,
        nipBanks, nipCharge
};