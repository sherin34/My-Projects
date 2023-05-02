module.exports = {
  view_insurance(obj, period) {
    obj = find_from_insurance(obj, period);
    return obj;
  },

  view_deposit(obj, period) {
    obj = find_from_deposit(obj, period);
    return obj;
  },
  view_kyc(obj, period) {
    obj = find_from_kyc(obj, period);
    return obj;
  },
  view_loan(obj, period) {
    obj = find_from_loan(obj, period);
    return obj;
  },
};

var find_from_insurance = function find_from_insurance(obj, period) {
  var result_array;
  let today = new Date();
  for (var i = obj.rows.length - 1; i >= 0; i--) {
    var new_due_date = dateFormat(obj.rows[i].INSURANCE_DUE_DATE);
    var diff = Math.abs(new_due_date.getTime() - today.getTime());
    let diff_days = Math.floor(diff / (24 * 60 * 60 * 1000));
    if (diff_days >= period * 30) {
      obj.rows.splice(i, 1);
    }
  }
  return obj;
};

var find_from_deposit = function find_from_deposit(obj, period) {
  var result_array;
  let today = new Date();
  for (var i = obj.rows.length - 1; i >= 0; i--) {
    var new_due_date = dateFormat(obj.rows[i].DEPOSIT_MATURE_DATE);
    var diff = Math.abs(new_due_date.getTime() - today.getTime());
    let diff_days = Math.floor(diff / (24 * 60 * 60 * 1000));
    if (diff_days >= period * 30) {
      obj.rows.splice(i, 1);
    }
  }
  return obj;
};

var find_from_kyc = function find_from_kyc(obj, period) {
  var result_array;
  let today = new Date();
  for (var i = obj.rows.length - 1; i >= 0; i--) {
    var new_due_date = dateFormat(obj.rows[i].DOCUMENT_EXPIRY);
    var diff = Math.abs(new_due_date.getTime() - today.getTime());
    let diff_days = Math.floor(diff / (24 * 60 * 60 * 1000));
    if (diff_days >= period * 30) {
      obj.rows.splice(i, 1);
    }
  }
  return obj;
};

var find_from_loan = function find_from_kyc(obj, period) {
  var result_array;
  let today = new Date();
  for (var i = obj.rows.length - 1; i >= 0; i--) {
    var new_due_date = dateFormat(obj.rows[i].NEXT_DUE_DATE);
    var diff = Math.abs(new_due_date.getTime() - today.getTime());
    let diff_days = Math.floor(diff / (24 * 60 * 60 * 1000));
    if (diff_days >= period * 30) {
      obj.rows.splice(i, 1);
    }
  }
  return obj;
};
dateFormat = function dateFormat(old_date) {
  var year = "" + old_date[6] + old_date[7] + old_date[8] + old_date[9];
  var month = "" + old_date[3] + old_date[4];
  var day = "" + old_date[0] + old_date[1];
  var new_date = new Date("" + year + "-" + month + "-" + day);
  return new_date;
};
