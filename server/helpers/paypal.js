const paypal =require('paypal-rest-sdk');

paypal.configure({
  mode: "sandbox",
  client_id: "AcDUEWLORPnbDe-nziwctmdGyFTpi4YJe9lAhJpvWpYYkRRMRq86VsC8-foV6UYHvZkfptMQjx4Rk37o",
  client_secret: "EMZbnQz-W50F6yBuu5MclB5Oaqvx02EYre2BDOabGcWiTEg58A10_MGmRJy67107Q9VnrNAm7tFNLZuj",
});

module.exports = paypal;