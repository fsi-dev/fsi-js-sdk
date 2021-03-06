import AfricasTalking from "../providers/AfricasTalking/AfricasTalking";
import EcoBank from "../providers/EcoBank/EcoBank";
import FCMB from "../providers/FCMB/Fcmb";
import SterlingBank from "../providers/SterlingBank/SterlingBank";
import Woven from '../providers/Woven/Woven';
import Zenith from '../providers/ZenithBank/ZenithBank';


interface ApiCallMethodInterface {
    ( secretKey: string, body: object, headers?: object, routeParam?: string|number): Promise<object>;
}

const resolveProviderName = (providerName: string, secretKey: string) => {
    switch(providerName){
        case 'AfricasTalking':
            return new AfricasTalking(secretKey);
            break;
        case 'EcoBank':
            return new EcoBank(secretKey);
            break;
        case 'FCMB':
            return new FCMB(secretKey);
            break;
        case 'SterlingBank':
            return new SterlingBank(secretKey);
            break;
        case 'Woven':
            return new Woven(secretKey);
            break;
        case 'Zenith':
            return new Zenith(secretKey);
            break;
    }
}

export { ApiCallMethodInterface, resolveProviderName };