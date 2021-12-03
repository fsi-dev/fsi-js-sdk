import Plans from './Plans';
import Wallet from './Wallet';
import Profiles from './Profiles';


export default class RelianceHMO {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    /*Plans*/
    getPlans = (body: object, header?: object) =>  Plans.getPlans(this.secretKey, body, header) ;
    signupCompany = (body: object, header?: object) =>  Plans.signupCompany(this.secretKey, body, header) ;
    signupIndividual = (body: object, header?: object) =>  Plans.signupIndividual(this.secretKey, body, header) ;
    signupEnrollees = (body: object, header?: object) =>  Plans.signupEnrollees(this.secretKey, body, header) ;
    renewCompanySubscription = (body: object, header?: object, company_code?: string|number) =>  Plans.renewCompanySubscription(this.secretKey, body, header, company_code) ;
    renewIndividualSubscription = (body: object, header?: object) =>  Plans.renewIndividualSubscription(this.secretKey, body, header) ;
    getProviders = (body: object, header?: object) =>  Plans.getProviders(this.secretKey, body, header) ;
    states = (body: object, header?: object) =>  Plans.states(this.secretKey, body, header) ;
    benefits = (body: object, header?: object) =>  Plans.benefits(this.secretKey, body, header) ;
    getTitles = (body: object, header?: object) =>  Plans.getTitles(this.secretKey, body, header) ;
    getOccupation = (body: object, header?: object) =>  Plans.getOccupation(this.secretKey, body, header) ;
    maritalStatus = (body: object, header?: object) =>  Plans.maritalStatus(this.secretKey, body, header) ;

    /*Wallet*/
    walletBalance = (body: object, header?: object) =>  Wallet.walletBalance(this.secretKey, body, header);
    fundWallet = (body: object, header?: object) =>  Wallet.fundWallet(this.secretKey, body, header);
    allActiveEnrollees = (body: object, header?: object) =>  Wallet.allActiveEnrollees(this.secretKey, body, header);
    getSingleEnrollee = (body: object, header?: object, id?: string|number) =>  Wallet.getSingleEnrollee(this.secretKey, body, header, id);

    /*Profiles*/
    uploadFile = (body: object, header?: object) =>  Profiles.uploadFile(this.secretKey, body, header);
    completeEnrolleeProfile = (body: object, header?: object) =>  Profiles.uploadFile(this.secretKey, body, header);
    consultations = (body: object, header?: object) =>  Profiles.consultations(this.secretKey, body, header);
    enrolleesValidation = (body: object, header?: object) =>  Profiles.enrolleesValidation(this.secretKey, body, header);
}