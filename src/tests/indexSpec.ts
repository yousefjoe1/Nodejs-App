import app from "../index";

import supertest from "supertest";

const requestApi = supertest(app)

describe('Api testing suite',()=>{
    it('get api endpoint (first page)',async()=>{
        const apiResponse = await requestApi.get('/');
        expect(apiResponse.status).toBe(200)
    })
})