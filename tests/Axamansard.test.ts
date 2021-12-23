import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'Axamansard';
const header: object = {
        ContentType: "application/json"
    };

let initializer = Fsi(testKey, provider);

/* Certificates */

    describe('Can downloadCertificate', () => {
        let body: object = { certId: 22124 };
        let response = initializer.downloadCertificate(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })

        it('Should return 200 status code', () => {
            return response.then( res => expect(res.status).toBe(200) );
        })
    });

    describe('Can downloadTravelCertificate', () => {
        let body: object = { };
        let certId = 22124;
        let response = initializer.downloadCertificate(body, header, certId);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can downloadMotorCertificate', () => {
        let body: object = { };
        let transactionReference = 22124;
        let response = initializer.downloadMotorCertificate(body, header, transactionReference);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can postTravelCertificate', () => {
        let body: object = { };
        let transactionReference = 22124;
        let response = initializer.postTravelCertificate(body, header, transactionReference);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can postMotorCertificate', () => {
        let body: object = { };
        let transactionReference = 22124;
        let response = initializer.postMotorCertificate(body, header, transactionReference);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/* HealthServices */
    describe('Can getHospitals', () => {
        let body: object = { };
        let response = initializer.getHospitals(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getTown', () => {
        let body: object = { };
        let state = 'lagos';
        let response = initializer.getTown(body, header, state);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getCondition', () => {
        let body: object = { };
        let response = initializer.getCondition(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getPlans', () => {
        let body: object = { };
        let response = initializer.getPlans(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getGender', () => {
        let body: object = { };
        let response = initializer.getGender(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getGenotype', () => {
        let body: object = { };
        let response = initializer.getGenotype(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getOwnershipType', () => {
        let body: object = { };
        let response = initializer.getOwnershipType(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can postHealthTransactions', () => {
        let body: object = { };
        let response = initializer.postHealthTransactions(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can postProcessHealth', () => {
        let body: object = { };
        let response = initializer.postProcessHealth(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/* MotorServices */
    describe('Can getMotorQuote', () => {
        let body: object = { };
        let response = initializer.getMotorQuote(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can getRiders', () => {
        let body: object = { };
        let response = initializer.getRiders(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getPolicyType', () => {
        let body: object = { };
        let response = initializer.getPolicyType(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getCarType', () => {
        let body: object = { };
        let response = initializer.getCarType(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getAllCars', () => {
        let body: object = { };
        let response = initializer.getAllCars(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getAllCarsBrand', () => {
        let body: object ;
        let response = initializer.getAllCarsBrand(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can postMotorTransaction', () => {
        let body: object ;
        let response = initializer.postMotorTransaction(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can bookMotor', () => {
        let body: object ;
        let response = initializer.bookMotor(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/* Life */ 
    describe('Can getLifeQuotes', () => {
        let body: object ;
        let response = initializer.getLifeQuotes(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can policyTypes', () => {
        let body: object ;
        let response = initializer.policyTypes(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can bookLifePolicy', () => {
        let body: object ;
        let response = initializer.bookLifePolicy(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/* Setup */ 
    describe('Can getCountries', () => {
        let body: object ;
        let response = initializer.getCountries(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getMaritalStatus', () => {
        let body: object ;
        let response = initializer.getMaritalStatus(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getLgas', () => {
        let body: object ;
        let response = initializer.getLgas(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can beneficiaryTypes', () => {
        let body: object ;
        let response = initializer.beneficiaryTypes(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getReligions', () => {
        let body: object ;
        let response = initializer.getReligions(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getTitles', () => {
        let body: object ;
        let response = initializer.getTitles(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getStates', () => {
        let body: object ;
        let response = initializer.getStates(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getRelationships', () => {
        let body: object ;
        let response = initializer.getRelationships(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getNationality', () => {
        let body: object ;
        let response = initializer.getNationality(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getPurposeOfTrip', () => {
        let body: object ;
        let response = initializer.getPurposeOfTrip(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getTravelPolicyTypes', () => {
        let body: object ;
        let response = initializer.getTravelPolicyTypes(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getSetupPlans', () => {
        let body: object ;
        let response = initializer.getSetupPlans(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getOccupations', () => {
        let body: object ;
        let response = initializer.getSetupPlans(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    describe('Can getPlansByID', () => {
        let body: object ;
        let response = initializer.getPlansByID(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/* Travel */ 
    describe('Can getQuote', () => {
        let body: object ;
        let response = initializer.getQuote(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });
    
    describe('Can getTravelTransactions', () => {
        let body: object ;
        let response = initializer.getTravelTransactions(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can issueTravelPolicy', () => {
        let body: object ;
        let response = initializer.issueTravelPolicy(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

/* Transaction */
    describe('Can getTransactions', () => {
        let body: object ;
        let id = 233489;
        let response = initializer.getTransactions(body, header, id);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });

    describe('Can getSetupPlans', () => {
        let body: object ;
        let response = initializer.getSetupPlans(body, header);

        it('Should not have code error', () => {
            return response.then( res => expect(res.codeError).toBe(false) );
        })
    });



