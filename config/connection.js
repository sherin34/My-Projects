const oracledb = require("oracledb");

async function connect() {
  try {
    const config = {
      user: "SYS",
      password: "sherin",
      connectString: "localhost:1521/XE",
      privilege: oracledb.SYSDBA,
    };

    const connection = await oracledb.getConnection(config);
    console.log("Connected to Oracle database!");

    return connection;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connect };
