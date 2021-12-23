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
