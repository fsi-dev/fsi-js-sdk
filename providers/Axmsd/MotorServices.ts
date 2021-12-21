import apiCall from "../../helpers/rest";
import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";

const providerPrefix = 'axamansard';

const getMotorQuote: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getMotorQuote';
    return apiCall(url,'POST', secretKey, body, headers);
}

const getRiders: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getRiders';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getPolicyType: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getPolicyType';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getCarType: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getCarType';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getAllCars: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getAllCars';
    return apiCall(url,'GET', secretKey, body, headers);
}

const getAllCarsBrand: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/getAllCarsBrand';
    return apiCall(url,'GET', secretKey, body, headers);
}

const postMotorTransaction: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/motor/transactions';
    return apiCall(url,'POST', secretKey, body, headers);
}

const bookMotor: ApiCallMethodInterface = (secretKey: string, body: object, headers?: object|null) => {
    let url: string = providerPrefix + '/bookMotor';
    return apiCall(url,'POST', secretKey, body, headers);
}

let MotorServices = { getMotorQuote , getRiders, getPolicyType, getCarType, getAllCars, getAllCarsBrand,
    postMotorTransaction, bookMotor };

export default MotorServices;