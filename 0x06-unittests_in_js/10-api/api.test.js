const request = require("request");
const { expect } = require("chai");

describe("API Integration Tests", () => {
  const API_URL = "http://localhost:7865";

  it("should return status 200 and welcome message for the root endpoint (GET /)", (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });

  it("should return status 200 and payment methods message for valid cart ID (GET /cart/:id)", (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart 47");
      done();
    });
  });

  it("should return status 404 for negative cart ID values (GET /cart/:id)", (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it("should return status 404 for non-numeric cart ID values (GET /cart/:id)", (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it("should return status 200 and welcome message for a valid username (POST /login)", (done) => {
    request.post(
      `${API_URL}/login`,
      { json: { userName: "Pinkbrook" } },
      (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal("Welcome Pinkbrook");
        done();
      }
    );
  });

  it("should return status 200 and available payment methods (GET /available_payments)", (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});
