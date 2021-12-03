import * as constants from '../../config/Constants';
import axios from "axios";

enum Methods { 'GET' = "GET", 'POST' = "POST", 'PUT' = "PUT", 'PATCH' = "PATCH", 'DELETE' = "DELETE"};

const apiCall = async (url: string, method: Methods|string, secretKey: string, body: object|null, headers?: object|null): Promise<object> => {
    try{
        const fullUrl: string = constants.baseUrl + url;
        const isGetRequest =  method.toLowerCase() === 'get';
        const options: object = {
            url: fullUrl,
            method: method,
            params: isGetRequest ? body : null,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'Sandbox-key': secretKey,
                Origin: 'developer.ecobank.com',
                'Authorization': "Bearer sdkkfllroodmmdl",
                ...headers
            },
            data: isGetRequest ? null : body
        };

        let result: any = {
            codeError: false,
            success: false,
            status: null,
            message: null,
            data: null
        };

        await axios(options)
                .then( (res) => {
                    result.success = true;
                    result.status = res.status;
                    result.data = res.data;
                })
                .catch( (error) => {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        result.status = error.response.status;
                        result.message = error.message;
                        result.data = error.response.data;
                        
                    }else if (error.request) {
                        result.data = error.request;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        result.message = error.message
                    }
                } );

        return result;

    }catch (e: any ) {
        return {
            codeError: true,
            data: null,
            success: false,
            message: e.message,
            status: null
        };
    }
};

export default apiCall;