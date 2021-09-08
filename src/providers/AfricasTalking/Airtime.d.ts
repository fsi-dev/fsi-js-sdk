import { ApiCallMethodInterface } from "../../config/Constants";
declare const sendAirtime: ApiCallMethodInterface;
declare const transactionStatus: (secretKey: string, body: object | null, header?: object | null) => Promise<object>;
export { sendAirtime, transactionStatus };
