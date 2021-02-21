import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import { data } from "./dummyData/data";

const { expect } = chai;
chai.use(chaiHttp);

export let taskId;

describe("tasks endpoint", () => {
    it('should return 200 ok status code when a task created successfully', (done) => {
        chai
            .request(app)
            .post("/task/")
            .send(data.task)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("task");
                taskId = res.body.task._id;
                done();
            })
    });

    it('should return 400 bad Request status code when an invalid field are passed through', (done) => {
        chai
            .request(app)
            .post("/task/")
            .send(data.invalidTask)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.have.property("error");
                done();
            });
    });


    it('should return 200 ok status when all tasks are retrieved', (done) => {
        chai
            .request(app)
            .get("/task/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("tasks");
                done();
            });
    });

    it('should return 200 ok status when retrieve a specific task', (done) => {
        chai
            .request(app)
            .get(`/task/${taskId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("task");
                done();
            });
    });

    it('should return 200 ok status when a task edited successfully', (done) => {
        chai
            .request(app)
            .patch(`/task/${taskId}`)
            .send(data.editedTask)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("task");
                done();
            });
    });

    it('should return 200 ok status when a task is deleted successfully', (done) => {
        chai
            .request(app)
            .delete(`/task/${taskId}`)
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });

    it('should return 404 not Found status when a task is not found', (done) => {
        chai
            .request(app)
            .get(`/task/${taskId}`)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property("error");
                done();
            });
    });
});
