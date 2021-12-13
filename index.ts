import { resolveProviderName } from './helpers/GeneralHelpers';

let Fsi = ( secretKey: string, provider: string): any => {
    return resolveProviderName(provider, secretKey);
};

export default Fsi;



// import {init, AfricanTalking} from 'FsiEngine'
// import {sendSms} from 'FsiEngine/AfricanTalking'
// // import * as FsiEngine from 'FsiEngine'
//
//
// init('key', 'type');
// AfricanTalking.sendSms()

//
// const sssss = init('key', 'type','AfricanTalking');
// const sssss = init('key', 'type','AfricanTalking');
// sssss.sendSms()
