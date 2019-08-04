const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const jwt = require("jsonwebtoken");
const jwtConfig = require("./config");
admin.initializeApp();

const validateAuthentication = httpRequest => {
  return new Promise((resolve, reject) => {
    const tokenId = httpRequest.body["params"]["googleToken"];
    admin
      .auth()
      .verifyIdToken(tokenId)
      .then(decoded => {
        resolve(decoded);
      })
      .catch(err => {
        reject(err);
      });
  });
};

exports.exchangeAuthToken = functions.https.onRequest(
  (httpRequest, httpResponse) => {
    cors(httpRequest, httpResponse, () => {
      return new Promise(resolve => {
        validateAuthentication(httpRequest)
          .then(userData => {
            // Valid token
            // Create new token
            const token = jwt.sign(
              {
                exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 365),
                userData
              },
              jwtConfig.jwtKey,
              { algorithm: "HS256" },
              (err, token) => {
                //   Callback method on successfull JWT creation
                if (token) {
                  httpResponse.status(200).send({
                    error: false,
                    token,
                    userData
                  });
                  resolve(true);
                } else {
                  httpResponse.status(401).send({
                    error: true,
                    data: err
                  });
                }
              }
            );
          })
          .catch(err => {
            httpResponse.status(401).send({
              error: true,
              data: err
            });
          });
      });
    });
  }
);