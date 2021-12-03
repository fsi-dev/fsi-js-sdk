import * as fcmbAuthentication from "./Authentication";
import * as fcmbCard from './Card';
import * as fcmbPayment from './Payment';
import * as fcmbWallet from './Wallet';

export default class FCMB {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

     /*Authentication*/
     validateByCustomerId = (body: object, header?: object) => { return fcmbAuthentication.validateByCustomerId(this.secretKey, body, header) };
     authenticateLastFourDigits = (body: object, header?: object) => { return fcmbAuthentication.lastFourDigits(this.secretKey, body, header) };
     authenticateAtmPin = (body: object, header?: object) => { return fcmbAuthentication.atmPin(this.secretKey, body, header) };

     /*Card*/
     cardType = (body: object, header?: object) => { return fcmbCard.cardType(this.secretKey, body, header) };
     cardRequest = (body: object, header?: object) => { return fcmbCard.cardRequest(this.secretKey, body, header) };
     
     /*Payment*/
     bankToBankTransfers = (body: object, header?: object) => { return fcmbPayment.bankToBankTransfers(this.secretKey, body, header) };
     bankToBankInternalTransfers = (body: object, header?: object) => { return fcmbPayment.bankToBankInternalTransfers(this.secretKey, body, header) };
     internalTransfers = (body: object, header?: object) => { return fcmbPayment.internalTransfers(this.secretKey, body, header) };
     internalTransferStatus = (body: object, header?: object) => { return fcmbPayment.internalTransferStatus(this.secretKey, body, header) };
     internalTransferDateRange = (body: object, header?: object) => { return fcmbPayment.internalTransferDateRange(this.secretKey, body, header) };
     nipTransfers = (body: object, header?: object) => { return fcmbPayment.nipTransfers(this.secretKey, body, header) };
     nipTransfersDateRange = (body: object, header?: object) => { return fcmbPayment.nipTransfersDateRange(this.secretKey, body, header) };
     nipCharge = (body: object, header?: object) => { return fcmbPayment.nipCharge(this.secretKey, body, header) };
     nipBanks = (body: object, header?: object) => { return fcmbPayment.nipBanks(this.secretKey, body, header) };
     nipName = (body: object, header?: object) => { return fcmbPayment.nipName(this.secretKey, body, header) };
     nipStatus = (body: object, header?: object) => { return fcmbPayment.nipStatus(this.secretKey, body, header) };
     nibssStatus = (body: object, header?: object) => { return fcmbPayment.nibssStatus(this.secretKey, body, header) };
     
     /*Wallet*/
     walletBalance = (body: object, header?: object) => { return fcmbWallet.customerWalletBalance(this.secretKey, body, header) };
     createNewWallet = (body: object, header?: object) => { return fcmbWallet.newWallet(this.secretKey, body, header) };
     walletStatus = (body: object, header?: object) => { return fcmbWallet.walletStatus(this.secretKey, body, header) };
     validateCode = (body: object, header?: object) => { return fcmbWallet.validateCode(this.secretKey, body, header) };

}