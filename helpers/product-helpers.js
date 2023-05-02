var db = require("../config/connection");
var view_helpers = require("../helpers/view_helpers");
const oracledb = require("oracledb");
oracledb.maxRows = 100;
module.exports = {
  findInsurance: (req_body) => {
    return new Promise(async (resolve, reject) => {
      const c = await db.connect();
      const cif_id=req_body.cif_id

      customer = await c.execute(`SELECT * FROM customers WHERE customer_id= :1`, [cif_id], {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
     
      deposit = await c.execute(`SELECT * FROM deposits WHERE customer_id= :1`, [cif_id], {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      insurance = await c.execute(`SELECT * FROM insurances WHERE customer_id= :1`, [cif_id],{
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      kyc=await c.execute(`SELECT * FROM kyc_docs WHERE customer_id= :1`, [cif_id], {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      loan=await c.execute(`SELECT * FROM LOANS WHERE customer_id= :1`, [cif_id], {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      insurance=view_helpers.view_insurance(insurance,req_body.period)
      deposit=view_helpers.view_deposit(deposit,req_body.period)
      kyc=view_helpers.view_kyc(kyc,req_body.period)
      loan=view_helpers.view_loan(loan,req_body.period)
      const resultSet=[customer.rows,deposit.rows,insurance.rows,kyc.rows,loan.rows]
      resolve(resultSet);
    });
    
  },
};
