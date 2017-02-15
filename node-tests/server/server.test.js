const request = require("supertest");
const expect = require("expect");
const app = require("./server").app;

describe("Express Server", () => {

    describe('GET /', () => {
        it("should return hello world response", (done) => {
            request(app)
                .get("/")
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: "Page not found."
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', function () {
        it("should return 3 users one named travis", (done) => {
            request(app)
                .get("/users")
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: "Travis",
                        age: 35
                    });
                    expect(res.body.length).toBe(3);
                })
                .end(done);
        });
    });


});

