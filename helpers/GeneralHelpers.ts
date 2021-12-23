import AfricasTalking from "../providers/AfricasTalking";
import EcoBank from "../providers/EcoBank";
import FCMB from "../providers/FCMB";
import SterlingBank from "../providers/SterlingBank";
import Woven from '../providers/Woven';
import Zenith from '../providers/ZenithBank';
import FlutterWave from '../providers/FlutterWave';
import RelianceHMO from "../providers/RelianceHMO/Index";
import Baxi from "../providers/Baxi";
import Axamansard from "../providers/Axmsd";
import UnionBank from "../providers/UnionBank";
import WemaBank from "../providers/WemaBank";

interface ApiCallMethodInterface {
    ( secretKey: string, body: object, headers?: object, routeParam?: string|number): Promise<object>;
}

interface ApiCallMultiParamsInterface {
    ( secretKey: string, body: object, headers?: object, routeParams?: object): Promise<object>;
}

const resolveProviderName = (providerName: string, secretKey: string) => {
    let provider = providerName.toLowerCase();

    switch(provider){
        case 'africastalking':
            return new AfricasTalking(secretKey);
        case 'ecobank':
            return new EcoBank(secretKey);
        case 'fcmb':
            return new FCMB(secretKey);
        case 'sterlingbank':
            return new SterlingBank(secretKey);
        case 'woven':
            return new Woven(secretKey);
        case 'zenith':
            return new Zenith(secretKey);
        case 'flutterwave':
            return new FlutterWave(secretKey);
        case 'reliancehmo':
            return new RelianceHMO(secretKey);
        case 'baxi':
            return new Baxi(secretKey);
        case 'axamansard':
            return new Axamansard(secretKey);
        case 'unionbank':
            return new UnionBank(secretKey);
        case 'wemabank':
            return new WemaBank(secretKey);
        default:
            throw 'Provider not found';
    }
}

export { ApiCallMethodInterface, ApiCallMultiParamsInterface, resolveProviderName };