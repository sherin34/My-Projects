var express = require("express");
var router = express.Router();
var productHelpers = require("../helpers/product-helpers");
var Handlebars = require("handlebars");
Handlebars.registerHelper("ifCond", function (v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  let auth = [
    {
      user_id: "sibl14973",
      password: "sib@apr23",
    },
  ];
  res.render("index", { auth });
});

router.post("/index", function (req, res) {
  if (req.body.password === "sib@apr23" && req.body.user_id === "sibl14973") {
    res.render("user");
  } else {
    res.render("login_failed");
  }
});

router.post("/user", function (req, res) {
  var req_body = req.body;

  productHelpers.findInsurance(req_body).then((resultSet) => {
    const customer = resultSet[0];
    const deposit = resultSet[1];
    const insurance = resultSet[2];
    const kyc = resultSet[3];
    const loan = resultSet[4];

    var customer_empty = false;
    var deposit_empty = false;
    var insurance_empty = false;
    var kyc_empty = false;
    var loan_empty = false;
    if (customer.length == 0) {
      customer_empty = true;
    }
    if (deposit.length == 0) {
      deposit_empty = true;
    }
    if (insurance.length == 0) {
      insurance_empty = true;
    }
    if (kyc.length == 0) {
      kyc_empty = true;
    }
    if (loan.length == 0) {
      loan_empty = true;
    }

    res.render("user_submit", {
      req_body,
      customer,
      deposit,
      insurance,
      kyc,
      loan,
      customer_empty,
      deposit_empty,
      insurance_empty,
      kyc_empty,
      loan_empty,
    });
  });
});

module.exports = router;
