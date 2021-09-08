declare const baseUrl: string;
declare const version: string;
import AfricasTalking from "../providers/AfricasTalking/AfricasTalking";
import EcoBank from "../providers/EcoBank/EcoBank";
import FCMB from "../providers/FCMB/Fcmb";
import SterlingBank from "../providers/SterlingBank/SterlingBank";
import Woven from '../providers/Woven/Woven';
import Zenith from '../providers/ZenithBank/ZenithBank';
declare enum Methods {
    'GET' = "GET",
    'POST' = "POST",
    'PUT' = "PUT",
    'PATCH' = "PATCH",
    'DELETE' = "DELETE"
}
interface ApiCallMethodInterface {
    (secretKey: string, body: object, headers?: object, routeParam?: string | number): Promise<object>;
}
declare const resolveProviderName: (providerName: string, secretKey: string) => AfricasTalking | EcoBank | FCMB | SterlingBank | Woven | Zenith;
export { baseUrl, version, ApiCallMethodInterface, Methods, resolveProviderName };
