import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import { data } from "./dummyData/data";
import Users from "../models/users";

const { expect } = chai;
chai.use(chaiHttp);

(async () => {
    await Users.deleteOne({ email: data.validUser.email});
})();

describe('user signup', () => {
    it('should return 400 bad request status when an invalid Email passed in', (done) => {
        chai
            .request(app)
            .post("/auth/signup")
            .send(data.invalidUserEmail)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.have.property("error");
                done();
            });
    });

    it('should return 400 bad request status when an invalid User Password passed in', (done) => {
        chai
            .request(app)
            .post("/auth/signup")
            .send(data.invalidUserPassword)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.have.property("error");
                done();
            })
    });

    it('should return 201 created status and token on User SignUp', (done) => {
        chai
            .request(app)
            .post("/auth/signup")
            .send(data.validUser)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.have.property("token");
            })
            done();
    });
});

describe('user login', () => {
    it('should return 400 bad request status when an invalid Email passed in', (done) => {
        chai
            .request(app)
            .post("/auth/login")
            .send(data.invalidUserEmail)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.have.property("error");
                done();
            });
    });

    it('should return 400 bad request status when an invalid User Password passed in', (done) => {
        chai
            .request(app)
            .post("/auth/login")
            .send(data.invalidUserPassword)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.have.property("error");
                done();
            })
    });

    it('should return 200 ok status and token on User logged in', (done) => {
        chai
            .request(app)
            .post("/auth/login")
            .send(data.validUser)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.have.property("token");
            })
            done();
    });
});
