import * as constants from '../../config/Constants';
import axios, {AxiosError, AxiosResponse} from "axios";

enum Methods { 'GET' = "GET", 'POST' = "POST", 'PUT' = "PUT", 'PATCH' = "PATCH", 'DELETE' = "DELETE"};

export const getUrl = (url: string) => `${constants.baseUrl}${url}`;

interface Response {
    codeError?: boolean,
    requestDelivered?: boolean,
    success?: boolean,
    data?: object,
    status?: number,
    message?: string
}

// export const settings = {
//     // baseURL: `http://159.65.81.15/api`,
//     baseURL: `http://192.168.15.142/api`,
//     // baseURL: `http://95.179.206.26/api`,
//     //timeout: 1000,
//     headers: {
//         // 'X-Requested-With': 'XMLHttpRequest',
//         // 'accept-encoding': 'gzip, deflate, br',
//         // 'sec-fetch-mode': 'cors',
//         // 'sec-fetch-site': 'same-origin',
//         // Accept: 'application/json',
//         // 'Content-Type': 'application/json',
//         // 'Content-Type': 'application/json;charset=utf-8',
//         'Content-Type': 'application/json',
//         // 'Access-Control-Allow-Headers': '*',
//         // 'Access-Control-Allow-Origin': '*',
//         // 'Access-Control-Allow-Credentials': true,
//         // 'Access-Control-Expose-Headers': 'access_token',
//         //  // 'Access-Control-Request-Headers': 'authorization',
//         //  'Authorization': `Bearer ${getSession()}`,
//         //  'common': {
//         //      'access-token': `Bearer ${getSession()}`,
//         //      'Authorization': `Bearer ${getSession()}`,
//         //  }
//     },
// };

// const instance = axios.create();
// // export const bearer = `Bearer ${getSession()}`;
// // const token = store.getState().user.token;
// // const token = 'sssssss';
//
// // export const bearer = `Bearer ${token}`;
// // console.log('bearer****', bearer);
// // instance.defaults.headers.common['Authorization'] = bearer;
//
// const onResponseSuccess = (response: AxiosResponse) => {
//     return Promise.resolve(response);
// };
//
// const onResponseFail = (error: AxiosError) => {
//     // const status = error.status || error.response.status;
//     // if (status === 403 || status === 401) {
//     //     console.log(error)
//     //     // const checkInUse = _.isEmpty(getSessionWithKey('__checkInUse'))
//     //     //     ? false
//     //     //     : getSessionWithKey('__checkInUse');
//     //     // if (checkInUse === false) {
//     //     //     setSessionWithValue(true, '__checkInUse');
//     //     //     return redirectToLogin();
//     //     //     // return onUnauthenticated();
//     //     // }
//     // }
//     return Promise.reject(error);
// };
//
// instance.interceptors.response.use(onResponseSuccess, onResponseFail);

// export default {
//     async getRef(url: string, request: any) {
//         return await instance.get(url, request);
//     },
//     async get(url: string, request: any) {
//         return await instance.get(getUrl(url), request);
//     },
//     async postRef(url: string, request: any) {
//         return await instance.post(url, request);
//     },
//     async post(url: string, request: any) {
//         return await instance.post(getUrl(url), request);
//     },
//     async put(url, request) {
//         return await instance.put(getUrl(url), request);
//     },
//     async patch(url, request) {
//         return await instance.patch(getUrl(url), request);
//     },
//     async delete(url, request) {
//         return await instance.delete(getUrl(url), request);
//     },
// };
//
// const onResponseSuccess = (response: AxiosResponse) => {
//     return Promise.resolve(response);
// };
//
// const onResponseFail = (error: AxiosError) => {
//     //const status = error.status || error.response.status;
//     return Promise.reject(error);
// };
//
// instance.interceptors.response.use(onResponseSuccess, onResponseFail);


const apiCall = async (
    url: string,
    method: Methods | string,
    secretKey: string,
    body: object | null,
    headers?: object | null ): Promise<Response> => {

    const fullUrl: string = getUrl(url);
    const isGetRequest = method.toLowerCase() === 'get';
    const options: object = {
        url: fullUrl,
        method: method,
        params: isGetRequest ? body : null,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json',
            'Sandbox-key': secretKey,
            ...headers
        },
        data: isGetRequest ? null : body
    };

    let result: Response = {
        codeError: false,
        success: false,
        status: 0,
        message: "",
        data: {}
    };

    try {
        let res = await axios(options);
        result.success = true;
        result.status = res.status;
        result.data = res.data;
        return result
    } catch (error: any) { //this needs more work
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            result.status = error.response.status;
            result.message = error.message;
            result.data = error.response.data;

        } else if (error.request) {
            result.data = error.request;
        } else {
            // Something happened in setting up the request that triggered an Error
            result.codeError = true;
            result.message = error.message
        }
        return result
    }

};

export default apiCall;
