import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'flutterwave/v3/';

const getAll: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + 'subscriptions';
    return apiCall(url,'POST', secretKey, body, headers);
}

const cancelSubscription: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'subscriptions/' + routeParam + 'cancel';
    return apiCall(url,'GET', secretKey, body, headers);
}

const activateSubscription: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null, routeParam?: string|number) => {
    let url: string = providerPrefix + 'subscriptions/' + routeParam + 'activate';
    return apiCall(url,'GET', secretKey, body, headers);
}

export { getAll, cancelSubscription, activateSubscription };