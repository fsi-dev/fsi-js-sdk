import Fsi from '../index';

const testKey: string = 'BpB8hcJslB3iRbDvUoJE0hBEFMkHuKU51624969834';
const provider: string = 'UnionBank';
const header: object = {
        ContentType: "application/x-www-form-urlencoded"
    };

let initializer = Fsi(testKey, provider);


describe('Can generateAccessToken', () => {
    let body: object = {};

    let response = initializer.generateAccessToken(body, header);

    it('Should not have code error', () => {
        return response.then( res => expect(res.codeError).toBe(false) );
    })
});

describe('Can accountEnquiry', () => {
    let body: object = {
        access_token: 'sssddddddd'
    };

    let response = initializer.accountEnquiry(body, header);

    it('Should not have code error', () => {
        return response.then( res => expect(res.codeError).toBe(false) );
    })
});

describe('Can customerEnquiry', () => {
    let body: object = {
        access_token: 'sssddddddd'
    };

    let response = initializer.customerEnquiry(body, header);

    it('Should not have code error', () => {
        return response.then( res => expect(res.codeError).toBe(false) );
    })
});

describe('Can customerAccountEnquiry', () => {
    let body: object = {
        access_token: 'sssddddddd'
    };

    let response = initializer.customerAccountEnquiry(body, header);

    it('Should not have code error', () => {
        return response.then( res => expect(res.codeError).toBe(false) );
    })
});

describe('Can changeUserCredentials', () => {
    let body: object = {
        access_token: 'sssddddddd'
    };

    let response = initializer.changeUserCredentials(body, header);

    it('Should not have code error', () => {
        return response.then( res => expect(res.codeError).toBe(false) );
    })
});
