import AfricasTalking from "../providers/AfricasTalking";
import EcoBank from "../providers/EcoBank";
import FCMB from "../providers/FCMB";
import SterlingBank from "../providers/SterlingBank";
import Woven from '../providers/Woven';
import Zenith from '../providers/ZenithBank';
import FlutterWave from '../providers/FlutterWave';
import RelianceHMO from "../providers/RelianceHMO/Index";
import Baxi from "../providers/Baxi";

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
        case 'RelianceHMO':
            return new RelianceHMO(secretKey);
        case 'Baxi':
            return new Baxi(secretKey);
        default:
            throw 'Provider not found';
    }
}

export { ApiCallMethodInterface, ApiCallMultiParamsInterface, resolveProviderName };