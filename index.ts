import { resolveProviderName } from './helpers/GeneralHelpers';

let Fsi = ( secretKey: string, provider: string): any => {
    return resolveProviderName(provider, secretKey); 
};

export default Fsi;