import AccountMaintenence from "./AccountMaintenance";
import Airtime from "./Airtime";
import AlatBankTransfer from "./AlatBankTransfer";
import AlatPayMerchant from "./AlatPayMerchant";
import AlatPayPaymentCard from "./AlatPayPaymentCard";
import CrowdFunding from "./CrowdFunding";
import OpenBillsPayment from "./OpenBillsPayment";

export default class WemaBank {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    /*Account Maintenance*/
    getAccount = (body: object, header: object, accountNumber: string|number) => { return AccountMaintenence.getAccount(this.secretKey, body, header, accountNumber) };
    getAccountByPhoneNumber = (body: object, header: object, phoneNumber: string|number) => { return AccountMaintenence.getAccountByPhoneNumber(this.secretKey, body, header, phoneNumber) };
    transactionHistoryV2 = (body: object, header: object) => { return AccountMaintenence.transactionHistoryV2(this.secretKey, body, header) };

    /* - ALAT Pay Merchant Onboarding API */
    addBusiness = (body: object, header: object, merchantId: string|number) => { return AlatPayMerchant.addBusiness(this.secretKey, body, header, merchantId) };
    createMerchant = (body: object, header: object) => { return AlatPayMerchant.createMerchant(this.secretKey, body, header) };
    deleteMerchant = (body: object, header: object, merchantId: string|number) => { return AlatPayMerchant.deleteMerchant(this.secretKey, body, header, merchantId) };
    deleteBusiness = (body: object, header: object, businessId: string|number) => { return AlatPayMerchant.deleteBusiness(this.secretKey, body, header, businessId) };
    getAllMerchants = (body: object, header: object) => { return AlatPayMerchant.getAllMerchants(this.secretKey, body, header) };
    getBusinessInformation = (body: object, header: object, businessId: string|number) => { return AlatPayMerchant.getBusinessInformation(this.secretKey, body, header, businessId) };
    getMerchantInformation = (body: object, header: object, merchantId: string|number) => { return AlatPayMerchant.getMerchantInformation(this.secretKey, body, header, merchantId) };
    getMerchantBusinessesList = (body: object, header: object, merchantId: string|number) => { return AlatPayMerchant.getMerchantBusinessesList(this.secretKey, body, header, merchantId) };
    updateBusiness = (body: object, header: object, merchantId: string|number) => { return AlatPayMerchant.updateBusiness(this.secretKey, body, header, merchantId) };
    updateMerchant = (body: object, header: object, merchantId: string|number) => { return AlatPayMerchant.updateMerchant(this.secretKey, body, header, merchantId) };
    
    /*Account Maintenance*/
    getDataPlans = (body: object, header: object) => { return Airtime.getDataPlans(this.secretKey, body, header) };
    purchaseAirtime = (body: object, header: object) => { return Airtime.purchaseAirtime(this.secretKey, body, header) };
    purchaseData = (body: object, header: object) => { return Airtime.purchaseData(this.secretKey, body, header) };
    
    /*Open Bills Payment*/
    getAllBillsAndPackages = (body: object, header: object) => { return OpenBillsPayment.getAllBillsAndPackages(this.secretKey, body, header) };
    validateCustomer = (body: object, header: object) => { return OpenBillsPayment.validateCustomer(this.secretKey, body, header) };
    payBill = (body: object, header: object) => { return OpenBillsPayment.payBill(this.secretKey, body, header) };

    /*Alat Bank Transfer*/
    getSettlementRecord = (body: object, header: object) => { return AlatBankTransfer.getSettlementRecord(this.secretKey, body, header) };
    performBulkSettlement = (body: object, header: object) => { return AlatBankTransfer.performBulkSettlement(this.secretKey, body, header) };
    virtualAccount = (body: object, header: object) => { return AlatBankTransfer.virtualAccount(this.secretKey, body, header) };
    getTransactionDetails = (body: object, header: object, transactionId: string|number) => { return AlatBankTransfer.getTransactionDetails(this.secretKey, body, header, transactionId) };
    getAllActiveVirtualAccounts = (body: object, header: object, merchantId: string|number) => { return AlatBankTransfer.getAllActiveVirtualAccounts(this.secretKey, body, header, merchantId) };
    getMerchantTransactions = (body: object, header: object, merchantId: string|number) => { return AlatBankTransfer.getMerchantTransactions(this.secretKey, body, header, merchantId) };
    getVirtualAccountName = (body: object, header: object) => { return AlatBankTransfer.getVirtualAccountName(this.secretKey, body, header) };
    listenToPaymentTransaction = (body: object, header: object) => { return AlatBankTransfer.listenToPaymentTransaction(this.secretKey, body, header) };
    transactionNotifications = (body: object, header: object) => { return AlatBankTransfer.transactionNotifications(this.secretKey, body, header) };

    /*Alat Pay PaymentCard */
    getSettlementRecordPaymentCard = (body: object, header: object) => { return AlatPayPaymentCard.getSettlementRecord(this.secretKey, body, header) };
    performBulkSettlementAction = (body: object, header: object) => { return AlatPayPaymentCard.performBulkSettlementAction(this.secretKey, body, header) };
    initializeCardPayment = (body: object, header: object) => { return AlatPayPaymentCard.initializeCardPayment(this.secretKey, body, header) };
    getTransactionDetailsPaymentCard = (body: object, header: object, businessId: string|number) => { return AlatPayPaymentCard.getTransactionDetails(this.secretKey, body, header, businessId) };
    getMerchantTransactionsPaymentCard = (body: object, header: object, merchantId: string|number) => { return AlatPayPaymentCard.getMerchantTransactions(this.secretKey, body, header, merchantId) };
    authenticateCardPayment = (body: object, header: object) => { return AlatPayPaymentCard.authenticateCardPayment(this.secretKey, body, header) };
    listenToATransaction = (body: object, header: object) => { return AlatPayPaymentCard.listenToATransaction(this.secretKey, body, header) };
    transactionCallback = (body: object, header: object) => { return AlatPayPaymentCard.transactionCallback(this.secretKey, body, header) };

    /*Crowdfunding*/
    profiles = (body: object, header: object) => { return CrowdFunding.profiles(this.secretKey, body, header) };
    authenticate = (body: object, header: object) => { return CrowdFunding.authenticate(this.secretKey, body, header) };
    changePassword = (body: object, header: object) => { return CrowdFunding.profiles(this.secretKey, body, header) };
    confirmChangeUserEmail = (body: object, header: object) => { return CrowdFunding.confirmChangeUserEmail(this.secretKey, body, header) };
    verifyUsername = (body: object, header: object) => { return CrowdFunding.verifyUsername(this.secretKey, body, header) };
    verifyEmail = (body: object, header: object) => { return CrowdFunding.verifyEmail(this.secretKey, body, header) };
    verifyAccount = (body: object, header: object) => { return CrowdFunding.verifyAccount(this.secretKey, body, header) };
    editCorporateDetails = (body: object, header: object, id: string|number) => { return CrowdFunding.editCorporateDetails(this.secretKey, body, header, id) };
    changeEmail = (body: object, header: object) => { return CrowdFunding.changeEmail(this.secretKey, body, header) };
    forgotPassword = (body: object, header: object) => { return CrowdFunding.forgotPassword(this.secretKey, body, header) };
    getCorporateDetails = (body: object, header: object, id: string|number) => { return CrowdFunding.getCorporateDetails(this.secretKey, body, header, id) };
    getProfile = (body: object, header: object) => { return CrowdFunding.getProfile(this.secretKey, body, header) };
    getAccountDetails = (body: object, header: object) => { return CrowdFunding.getAccountDetails(this.secretKey, body, header) };
    personalVerification = (body: object, header: object) => { return CrowdFunding.personalVerification(this.secretKey, body, header) };
    corporateAccountDetails = (body: object, header: object) => { return CrowdFunding.corporateAccountDetails(this.secretKey, body, header) };
    corporateAccount = (body: object, header: object) => { return CrowdFunding.corporateAccount(this.secretKey, body, header) };
    personalAccounts = (body: object, header: object) => { return CrowdFunding.personalAccounts(this.secretKey, body, header) };
    registerCorporate = (body: object, header: object) => { return CrowdFunding.registerCorporate(this.secretKey, body, header) };
    registerProfile = (body: object, header: object) => { return CrowdFunding.registerProfile(this.secretKey, body, header) };
    sendRequest = (body: object, header: object) => { return CrowdFunding.sendRequest(this.secretKey, body, header) };
    resetAccountPassword = (body: object, header: object) => { return CrowdFunding.resetAccountPassword(this.secretKey, body, header) };
    updateCorporateManager = (body: object, header: object) => { return CrowdFunding.updateCorporateManager(this.secretKey, body, header) };
    updatePersonalAccountNumber = (body: object, header: object) => { return CrowdFunding.updatePersonalAccountNumber(this.secretKey, body, header) };
    verifyOTP = (body: object, header: object) => { return CrowdFunding.verifyOTP(this.secretKey, body, header) };
}