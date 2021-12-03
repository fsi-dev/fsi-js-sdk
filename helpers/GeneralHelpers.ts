import AfricasTalking from "../providers/AfricasTalking/AfricasTalking";
import EcoBank from "../providers/EcoBank/EcoBank";
import FCMB from "../providers/FCMB/Fcmb";
import SterlingBank from "../providers/SterlingBank/SterlingBank";
import Woven from '../providers/Woven/Woven';
import Zenith from '../providers/ZenithBank/ZenithBank';
import FlutterWave from '../providers/FlutterWave/FlutterWave';

interface ApiCallMethodInterface {
    ( secretKey: string, body: object, headers?: object, routeParam?: string|number): Promise<object>;
}

interface ApiCallMultiParamsInterface {
    ( secretKey: string, body: object, headers?: object, routeParams?: object): Promise<object>;
}

const resolveProviderName = (providerName: string, secretKey: string) => {
    switch(providerName){
        case 'AfricasTalking':
            return new AfricasTalking(secretKey);
        case 'EcoBank':
            return new EcoBank(secretKey);
        case 'FCMB':
            return new FCMB(secretKey);
        case 'SterlingBank':
            return new SterlingBank(secretKey);
        case 'Woven':
            return new Woven(secretKey);
        case 'Zenith':
            return new Zenith(secretKey);
        case 'FlutterWave':
            return new FlutterWave(secretKey);
        default:
            throw 'Provider not found';
    }
}

export { ApiCallMethodInterface, ApiCallMultiParamsInterface, resolveProviderName };