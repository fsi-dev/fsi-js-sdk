import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../config/Constants";

const providerPrefix = 'v1/africastalking';

const sendAirtime: ApiCallMethodInterface = (secretKey: string, body: object|null, header?: null|object ) => {
    let url: string = providerPrefix + '/version1/airtime/send';
    return apiCall(url,'POST', secretKey, body, header);
}

const transactionStatus = (secretKey: string, body: object|null, header?: object|null) => {
    let url: string = providerPrefix + '/query/transaction/find';
    return apiCall(url,'GET', secretKey, body, header);
}


export { sendAirtime, transactionStatus };