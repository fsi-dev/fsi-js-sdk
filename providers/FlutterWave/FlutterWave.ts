import * as Banks from './Banks'; 
import * as Otp from './Otp'; 
import * as Beneficiaries from './Beneficiaries';
import * as Bills from './Bills';
import * as ChargeBacks from './ChargeBacks';
import * as Charges from './Charges';
import Misc from './Misc';
import PaymentPlans from './PaymentPlans';
import PayoutSubAccount from './PayoutSubAccount';
import RemitaPayments from './RemitaPayments';
import Settlement from './Settlement';
import SubAccounts from './SubAccounts';
import Subscriptions from './Subscriptions';
import Transactions from './Transactions';
import Transfer from './Transfer';
import VirtualCard from './VirtualCard';

export default class FlutterWave {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    /*Banks*/
    getAllBanks = (body: object, header?: object, routeParam?: string|number) =>  Banks.getAllBanks(this.secretKey, body, header, routeParam);
    getBankBranches = (body: object, header?: object, routeParam?: string|number) =>  Banks.getBankBranches(this.secretKey, body, header, routeParam);
    
    /*Otp*/
    otp = (body: object, header?: object, routeParam?: string|number) =>  Otp.otps(this.secretKey, body, header, routeParam);
    validateOTP = (body: object, header?: object, routeParam?: string|number) =>  Otp.validateOTP(this.secretKey, body, header, routeParam);
    
    /*Beneficiaries*/
    createBeneficiary = (body: object, header?: object) =>  Beneficiaries.createBeneficiary(this.secretKey, body, header);
    getBeneficiaries = (body: object, header?: object) =>  Beneficiaries.getBeneficiaries(this.secretKey, body, header);
    fetchBeneficiary = (body: object, header?: object) =>  Beneficiaries.fetchBeneficiary(this.secretKey, body, header);
    deleteBeneficiary = (body: object, header?: object) =>  Beneficiaries.deleteBeneficiary(this.secretKey, body, header);
    
    /*Bills*/
    getBillCategories = (body: object, header?: object) =>  Bills.getBillCategories(this.secretKey, body, header);
    validateBillService = (body: object, header?: object, routeParam?: string|number) =>  Bills.validateBillService(this.secretKey, body, header, routeParam);
    bills = (body: object, header?: object) =>  Bills.bills(this.secretKey, body, header);
    bulkBills = (body: object, header?: object) =>  Bills.bulkBills(this.secretKey, body, header);
    getBillStatus = (body: object, header?: object, routeParam?: string|number) =>  Bills.getBillStatus(this.secretKey, body, header, routeParam);
    getBillPayments = (body: object, header?: object) =>  Bills.getBillPayments(this.secretKey, body, header);

    /*ChargeBacks*/
    listAllChargeBacks = (body: object, header?: object) =>  ChargeBacks.listAllChargeBacks(this.secretKey, body, header);
    update = (body: object, header?: object, routeParam?: string|number) =>  ChargeBacks.update(this.secretKey, body, header, routeParam);

    /*Charges*/
    capturePreAuthCharge = (body: object, header?: object) =>  Charges.capturePreAuthCharge(this.secretKey, body, header);
    voidPreAuthCharge = (body: object, header?: object) =>  Charges.voidPreAuthCharge(this.secretKey, body, header);
    refundPreAuthCharge = (body: object, header?: object) =>  Charges.refundPreAuthCharge(this.secretKey, body, header);
    
    /*Misc*/
    getWalletBalance = (body: object, header?: object, routeParam?: string|number) =>  Misc.getWalletBalance(this.secretKey, body, header, routeParam);
    getWalletBalancePerCurrency = (body: object, header?: object, routeParam?: string|number) =>  Misc.getWalletBalancePerCurrency(this.secretKey, body, header, routeParam);
    resolveAccountDetails = (body: object, header?: object) =>  Misc.resolveAccountDetails(this.secretKey, body, header);
    getBVNDetails = (body: object, header?: object, routeParam?: string|number) =>  Misc.getBVNDetails(this.secretKey, body, header, routeParam);
    resolveCardBins = (body: object, header?: object, routeParam?: string|number) =>  Misc.resolveCardBins(this.secretKey, body, header, routeParam);
    rates = (body: object, header?: object) =>  Misc.rates(this.secretKey, body, header);
    
    /*PaymentPlans*/
    createPaymentPlan = (body: object, header?: object) =>  PaymentPlans.createPaymentPlan(this.secretKey, body, header);
    getPaymentPlans = (body: object, header?: object) =>  PaymentPlans.getPaymentPlans(this.secretKey, body, header);
    getAPaymentPlan = (body: object, header?: object, routeParam?: string|number) =>  PaymentPlans.getAPaymentPlan(this.secretKey, body, header, routeParam);
    updateAPaymentPlan = (body: object, header?: object, routeParam?: string|number) =>  PaymentPlans.updateAPaymentPlan(this.secretKey, body, header, routeParam);
    cancelAPaymentPlan = (body: object, header?: object) =>  PaymentPlans.cancelAPaymentPlan(this.secretKey, body, header);
    
    /*PayoutSubAccount*/
    createAPayoutSubAccount = (body: object, header?: object) =>  PayoutSubAccount.createASubAccount(this.secretKey, body, header);
    fetchAPayoutSubAccount = (body: object, header?: object) =>  PayoutSubAccount.fetchASubAccount(this.secretKey, body, header);
    fetchPayoutSubAccounts = (body: object, header?: object) =>  PayoutSubAccount.fetchSubAccounts(this.secretKey, body, header);
    updatePayoutSubAccounts = (body: object, header?: object) =>  PayoutSubAccount.updateSubAccounts(this.secretKey, body, header);
    fetchTransactions = (body: object, header?: object, routeParam?: string|number) =>  PayoutSubAccount.fetchTransactions(this.secretKey, body, header, routeParam);
    fetchBalance = (body: object, header?: object, routeParam?: string|number) =>  PayoutSubAccount.fetchBalance(this.secretKey, body, header, routeParam);
    fetchStaticVirtualAccounts = (body: object, header?: object) =>  PayoutSubAccount.fetchStaticVirtualAccounts(this.secretKey, body, header);
    
    /*RemitaPayments*/
    getBillPaymentAgencies = (body: object, header?: object) =>  RemitaPayments.getBillPaymentAgencies(this.secretKey, body, header);
    getAgencyProducts = (body: object, header?: object, routeParam?: string|number) =>  RemitaPayments.getAgencyProducts(this.secretKey, body, header, routeParam);
    getProductAmount = (body: object, header?: object, routeParams: any = {}) =>  RemitaPayments.getProductAmount(this.secretKey, body, header, routeParams);
    createOrder = (body: object, header?: object, routeParams: any = {}) =>  RemitaPayments.createOrder(this.secretKey, body, header, routeParams);
    updateOrder = (body: object, header?: object, routeParam?: string|number) =>  RemitaPayments.updateOrder(this.secretKey, body, header, routeParam);

    /*Settlements*/
    allSettlements = (body: object, header?: object) =>  Settlement.allSettlements(this.secretKey, body, header);
    getASettlement = (body: object, header?: object, routeParam?: string|number) =>  Settlement.getASettlement(this.secretKey, body, header, routeParam);
    
    /*SubAccounts*/
    createASubAccount = (body: object, header?: object) =>  SubAccounts.createASubAccount(this.secretKey, body, header);
    getSubAccounts = (body: object, header?: object) =>  SubAccounts.getSubAccounts(this.secretKey, body, header);
    fetchASubAccount = (body: object, header?: object, routeParam?: string|number) =>  SubAccounts.fetchASubAccount(this.secretKey, body, header, routeParam);
    updateASubAccount = (body: object, header?: object, routeParam?: string|number) =>  SubAccounts.updateASubAccount(this.secretKey, body, header, routeParam);
    deleteASubAccount = (body: object, header?: object, routeParam?: string|number) =>  SubAccounts.deleteASubAccount(this.secretKey, body, header, routeParam);
    
    /*Subscriptions*/
    getAll = (body: object, header?: object) =>  Subscriptions.getAll(this.secretKey, body, header);
    cancelSubscription = (body: object, header?: object, routeParam?: string|number) =>  Subscriptions.cancelSubscription(this.secretKey, body, header, routeParam);
    activateSubscription = (body: object, header?: object, routeParam?: string|number) =>  Subscriptions.activateSubscription(this.secretKey, body, header, routeParam);
    
    /*Transactions*/
    getAllTransactions = (body: object, header?: object) =>  Transactions.getAllTransactions(this.secretKey, body, header);
    getTransactionFee = (body: object, header?: object) =>  Transactions.getTransactionFee(this.secretKey, body, header);
    resendTransactionWebhook = (body: object, header?: object) =>  Transactions.resendTransactionWebhook(this.secretKey, body, header);
    initiateTransactionRefund = (body: object, header?: object) =>  Transactions.initiateTransactionRefund(this.secretKey, body, header);
    getTransactionRefund = (body: object, header?: object) =>  Transactions.getTransactionRefund(this.secretKey, body, header);
    verifyTransaction = (body: object, header?: object) =>  Transactions.verifyTransaction(this.secretKey, body, header);
    viewTransactionTimeline = (body: object, header?: object) =>  Transactions.viewTransactionTimeline(this.secretKey, body, header);
    getAllRefunds = (body: object, header?: object) =>  Transactions.getAllRefunds(this.secretKey, body, header);
    
    /*Transfer*/
    createTransfer = (body: object, header?: object) =>  Transfer.createTransfer(this.secretKey, body, header);
    retryTransfer = (body: object, header?: object) =>  Transfer.retryTransfer(this.secretKey, body, header);
    createBulkTransfer = (body: object, header?: object) =>  Transfer.createBulkTransfer(this.secretKey, body, header);
    getTransferFee = (body: object, header?: object) =>  Transfer.getTransferFee(this.secretKey, body, header);
    getAllTransfers = (body: object, header?: object) =>  Transfer.getAllTransfers(this.secretKey, body, header);
    getATransfer = (body: object, header?: object) =>  Transfer.getATransfer(this.secretKey, body, header);
    getATransferRetry = (body: object, header?: object) =>  Transfer.getATransferRetry(this.secretKey, body, header);
    checkTransferRates = (body: object, header?: object) =>  Transfer.checkTransferRates(this.secretKey, body, header);
    
    /*VirtualCard*/
    createVirtualCard = (body: object, header?: object) =>  VirtualCard.createVirtualCard(this.secretKey, body, header);
    getAllVirtualCards = (body: object, header?: object) =>  VirtualCard.getAllVirtualCards(this.secretKey, body, header);
    getAVirtualCard = (body: object, header?: object, routeParam?: string|number) =>  VirtualCard.getAVirtualCard(this.secretKey, body, header, routeParam);
    fundAVirtualCard = (body: object, header?: object, routeParam?: string|number) =>  VirtualCard.fundAVirtualCard(this.secretKey, body, header, routeParam);
    terminateAVirtualCard = (body: object, header?: object, routeParam?: string|number) =>  VirtualCard.terminateAVirtualCard(this.secretKey, body, header, routeParam);
    getAVirtualCardTransactions = (body: object, header?: object, routeParam?: string|number) =>  VirtualCard.getAVirtualCardTransactions(this.secretKey, body, header, routeParam);
    withdrawFromAVirtualCard = (body: object, header?: object, routeParam?: string|number) =>  VirtualCard.withdrawFromAVirtualCard(this.secretKey, body, header, routeParam);
    blockOrUnblockVirtualCard = (body: object, header?: any, routeParams: any = {}) =>  VirtualCard.blockOrUnblockVirtualCard(this.secretKey, body, header, routeParams);
    
}