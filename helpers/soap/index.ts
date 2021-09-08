import * as constants from '../../config/Constants';
import axios from "axios";

enum Methods { 'GET' = "GET", 'POST' = "POST", 'PUT' = "PUT", 'PATCH' = "PATCH", 'DELETE' = "DELETE"};

const apiCall = async (url: string, method: Methods|string, secretKey: string, body: object|null, headers?: object|null): Promise<object> => {
    try{
        const fullUrl: string = constants.baseUrl + constants.version + url;
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
        let result = await axios(options)
        return {
            codeError: false,
            result: result.data
        };
    }catch (e) {
        return {
            codeError: true,
            message: e.message()
        };
    }
};

export default apiCall;