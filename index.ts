import { resolveProviderName } from './config/Constants';

let Fsi = ( secretKey: string, provider: string): any => {
    return resolveProviderName(provider, secretKey); 
};

export default Fsi;

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'EcoBank';
const header: object = {
    Origin: 'developer.ecobank.com',
    Authorization: "Bearer sdkkfllroodmmdl"
};

// let initializer = Fsi(testKey, provider);

// let body: object = {
//     userId: "developer1@unifiedworks.com",
//     password: "$2a$10$Wmame.Lh1FJDCB4JJIxtx.3SZT0dP2XlQWgj9Q5UAGcDLp!@3344"
// };

// let response = initializer.generateToken(body);

// response.then( res => console.log({success : res}) ).catch( err => console.log({error: err}) );
