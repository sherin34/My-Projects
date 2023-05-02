CREATE TABLE customers(
    customer_id VARCHAR2(50) NOT NULL PRIMARY KEY,
    customer_name VARCHAR2(50) NOT NULL,
    dob VARCHAR2(50) NOT NULL,
    mobile_no varchar2(50),
    email varchar2(50),
    address varchar2(50)
);

CREATE TABLE deposits(
    customer_id VARCHAR2(50) NOT NULL,
    deposit_number VARCHAR2(50) NOT NULL PRIMARY KEY,
    deposit_open_amount varchar2(50) not null,
    deposit_roi varchar2(50) not null,
    deposit_period_months varchar2(50) not null,
    deposit_period_days varchar2(50) not null,
    deposit_mature_amount varchar2(50) not null,
    deposit_mature_date VARCHAR2(50) NOT NULL,
    deposit_nominee VARCHAR2(50) NOT NULL
);

CREATE TABLE insurances(
    customer_id VARCHAR2(50) NOT NULL,
    insurance_provider VARCHAR2(50) NOT NULL,
    policy_number varchar2(50) not null,
    premium_amount varchar2(50) not null,
    sum_assured varchar2(50) not null,
    insurance_tenure varchar2(50) not null,
    insurance_due_date VARCHAR2(50) NOT NULL,
    insurance_nominee varchar2(50) not null,
    insurance_mature_date varchar2(50) not null
);

CREATE TABLE LOANS(
    customer_id VARCHAR2(50) NOT NULL,
    loan_product_name varchar2(50) not null,
    loan_account_number VARCHAR2(50) PRIMARY KEY NOT NULL,
    loan_roi varchar2(50) not null,
    loan_amount varchar2(50) not null,
    due_amount VARCHAR2(50) NOT NULL,
    next_due_date VARCHAR2(50) NOT NULL
);

CREATE TABLE kyc_docs(
    customer_id VARCHAR2(50) NOT NULL,
    document_name VARCHAR2(50) NOT NULL,
    document_number VARCHAR2(50) NOT NULL PRIMARY KEY,
    document_expiry VARCHAR2(50) NOT NULL
);