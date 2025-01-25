const request = require("request");
const { expect } = require("chai");

describe("API Integration Tests", () => {
  const API_URL = "http://localhost:7865";

  it("should return status 200 and the correct welcome message for the root endpoint", (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });

  it("should return status 200 and payment methods message for valid cart ID", (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart 47");
      done();
    });
  });

  it("should return status 404 for negative cart ID values", (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it("should return status 404 for non-numeric cart ID values", (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
