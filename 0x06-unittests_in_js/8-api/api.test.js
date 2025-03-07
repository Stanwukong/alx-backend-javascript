const request = require("request");
const { expect } = require("chai");

describe("API integration test", () => {
  const API_URL = "http://localhost:7865/";

  it("GET / should return 200", (done) => {
    request.get(API_URL, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });
});
