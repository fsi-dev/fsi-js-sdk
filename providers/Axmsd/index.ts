import Certificate from "./Certificate";
import HealthServices from "./HealthServices";
import Life from "./Life";
import MotorServices from "./MotorServices";
import Setup from "./Setup";
import TravelAndTransaction from "./TravelAndTransaction";

export default class Axamansard {
    secretKey: string;

    constructor(testKey: string){
        this.secretKey = testKey;
    }

    /*Certificates*/
    downloadCertificate = (body: object, header: object) => { return Certificate.downloadCertificate(this.secretKey, body, header) };
    downloadTravelCertificate = (body: object, header: object, certId: string | number) => { return Certificate.downloadTravelCertificate(this.secretKey, body, header, certId) };
    downloadMotorCertificate = (body: object, header: object, transactionReference: string) => { return Certificate.downloadMotorCertificate(this.secretKey, body, header, transactionReference) };
    postTravelCertificate = (body: object, header: object, transactionReference: string) => { return Certificate.postTravelCertificate(this.secretKey, body, header, transactionReference) };
    postMotorCertificate = (body: object, header: object, transactionReference: string) => { return Certificate.postMotorCertificate(this.secretKey, body, header, transactionReference) };
    
    
    /*HealthServices*/
    getHospitals = (body: object, header: object) => { return HealthServices.getHospitals(this.secretKey, body, header) };
    getTown = (body: object, header: object, state: string) => { return HealthServices.getTown(this.secretKey, body, header, state) };
    getCondition = (body: object, header: object) => { return HealthServices.getCondition(this.secretKey, body, header) };
    getPlans = (body: object, header: object) => { return HealthServices.getPlans(this.secretKey, body, header) };
    getGender = (body: object, header: object) => { return HealthServices.getGender(this.secretKey, body, header) };
    getGenotype = (body: object, header: object) => { return HealthServices.getGenotype(this.secretKey, body, header) };
    getOwnershipType = (body: object, header: object) => { return HealthServices.getOwnershipType(this.secretKey, body, header) };
    postHealthTransactions = (body: object, header: object) => { return HealthServices.postHealthTransactions(this.secretKey, body, header) };
    postProcessHealth = (body: object, header: object) => { return HealthServices.postProcessHealth(this.secretKey, body, header) };

    /*MotorServices*/
    getMotorQuote = (body: object, header: object) => { return MotorServices.getMotorQuote(this.secretKey, body, header) };
    getRiders = (body: object, header: object) => { return MotorServices.getRiders(this.secretKey, body, header) };
    getPolicyType = (body: object, header: object) => { return MotorServices.getPolicyType(this.secretKey, body, header) };
    getCarType = (body: object, header: object) => { return MotorServices.getCarType(this.secretKey, body, header) };
    getAllCars = (body: object, header: object) => { return MotorServices.getAllCars(this.secretKey, body, header) };
    getAllCarsBrand = (body: object, header: object) => { return MotorServices.getAllCarsBrand(this.secretKey, body, header) };
    postMotorTransaction = (body: object, header: object) => { return MotorServices.postMotorTransaction(this.secretKey, body, header) };
    bookMotor = (body: object, header: object) => { return MotorServices.bookMotor(this.secretKey, body, header) };

    /*Life*/
    getLifeQuotes = (body: object, header: object) => { return Life.getLifeQuotes(this.secretKey, body, header) };
    policyTypes = (body: object, header: object) => { return Life.policyTypes(this.secretKey, body, header) };
    bookLifePolicy = (body: object, header: object) => { return Life.bookLifePolicy(this.secretKey, body, header) };

    /*Setup*/
    getCountries = (body: object, header: object) => { return Setup.getCountries(this.secretKey, body, header) };
    getMaritalStatus = (body: object, header: object) => { return Setup.getMaritalStatus(this.secretKey, body, header) };
    getLgas = (body: object, header: object) => { return Setup.getLgas(this.secretKey, body, header) };
    beneficiaryTypes = (body: object, header: object) => { return Setup.beneficiaryTypes(this.secretKey, body, header) };
    getReligions = (body: object, header: object) => { return Setup.getReligions(this.secretKey, body, header) };
    getTitles = (body: object, header: object) => { return Setup.getTitles(this.secretKey, body, header) };
    getStates = (body: object, header: object) => { return Setup.getStates(this.secretKey, body, header) };
    getRelationships = (body: object, header: object) => { return Setup.getRelationships(this.secretKey, body, header) };
    getNationality = (body: object, header: object) => { return Setup.getNationality(this.secretKey, body, header) };
    getPurposeOfTrip = (body: object, header: object) => { return Setup.getPurposeOfTrip(this.secretKey, body, header) };
    getTravelPolicyTypes = (body: object, header: object) => { return Setup.getTravelPolicyTypes(this.secretKey, body, header) };
    getSetupPlans = (body: object, header: object) => { return Setup.getPlans(this.secretKey, body, header) };
    getOccupations = (body: object, header: object) => { return Setup.getOccupations(this.secretKey, body, header) };
    getPlansByID = (body: object, header: object) => { return Setup.getPlansByID(this.secretKey, body, header) };

    /*Travel*/
    getQuote = (body: object, header: object) => { return TravelAndTransaction.getQuote(this.secretKey, body, header) };
    getTravelTransactions = (body: object, header: object) => { return TravelAndTransaction.getTravelTransactions(this.secretKey, body, header) };
    issueTravelPolicy = (body: object, header: object) => { return TravelAndTransaction.issueTravelPolicy(this.secretKey, body, header) };

    /*Transaction*/
    getTransactions = (body: object, header: object, id: string|number) => { return TravelAndTransaction.getTransactions(this.secretKey, body, header, id) };

}