import { interbankNameEnquiry, interbankTransfer, mobileWallet, getBillersPaymentItems, getBillersISW } from './SterlingBank';



export default class SterlingBank {
    secretKey: string;

    constructor(key: string) {
        this.secretKey = key;
    }

    interbankNameEnquiry = (body: object, header?: object) => {
        return interbankNameEnquiry(this.secretKey, body, header)
    };

    interbankTransfer = (body: object, header?: object) => { 
        return interbankTransfer(this.secretKey, body, header) 
    };

    mobileWallet = (body: object, header?: object) => { 
        return mobileWallet(this.secretKey, body, header) 
    };

    getBillersPaymentItems = (body: object, header?: object) => { 
        return getBillersPaymentItems(this.secretKey, body, header) 
    };

    getBillersISW = (body: object, header?: object) => { 
        return getBillersISW(this.secretKey, body, header) 
    };

}