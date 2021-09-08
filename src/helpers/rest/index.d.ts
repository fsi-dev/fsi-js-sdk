declare enum Methods {
    'GET' = "GET",
    'POST' = "POST",
    'PUT' = "PUT",
    'PATCH' = "PATCH",
    'DELETE' = "DELETE"
}
declare const apiCall: (url: string, method: Methods | string, secretKey: string, body: object | null, headers?: object | null) => Promise<object>;
export default apiCall;
