CREATE TABLE tblRoutes (
    routeId int primary key AUTO_INCREMENT,
    routeName varchar(64) NOT NULL,
    routeComponentName varchar(64) NOT NULL,
    routeComponentLocation varchar(128) NOT NULL,
    routeUrl varchar(32) NOT NULL,
    routeTarget char(1) NOT NULL default '0',
    routeIsPrivate char(1) NOT NULL default '0',
    routeIsActive char(1) NOT NULL default '1'
);

CREATE TABLE tblUserRoles (
    roleId int primary key AUTO_INCREMENT,
    roleName varchar(32) NOT NULL,
    roleDescription varchar(128) NOT NULL,
    roleAccessDetails JSON not null,
    roleIsActive char(1) NOT NULL default '1'
);

CREATE TABLE tblUsers (
    userId int primary key AUTO_INCREMENT,
    userFirstName varchar(64) NOT NULL,
    userLastName varchar(64) NOT NULL,
    userEmail varchar(255) NOT NULL,
    userPhoneNumber char(10) NOT NULL,
    userWhatsappNumber char(10) NOT NULL,
    userAddress JSON NOT NULL,
    userIsEmailVerified char(1) NOT NULL default '0',
    userIsPhoneVerified char(1) NOT NULL default '0',
    userIsWhatsappVerified char(1) NOT NULL default '0',
    userLogin varchar(16) NOT NULL UNIQUE,
    userPassword char(60) NOT NULL,
    userLoginOtp char(6),
    userAccessToken char(128),
    userRefreshToken char(128),
    userRoleId int,
    userIsActive char(1) NOT NULL default '1',
    userCreatedDate datetime NOT NULL default CURRENT_TIMESTAMP,
    FOREIGN KEY (userRoleId) REFERENCES tblUserRoles (roleId)
);

CREATE TABLE tblUserVerificationDetails (
    verificationId int primary key AUTO_INCREMENT,
    verificationUserId int NOT NULL,
    verificationType char(1) NOT NULL,
    verificationKeyType varchar(1) NOT NULL,
    verificationValue varchar(128) NOT NULL,
    verificationStatus char(1) NOT NULL default '0',
    verificationCretedDate datetime NOT NULL default CURRENT_TIMESTAMP,
    FOREIGN KEY (verificationUserId) REFERENCES tblUsers (userId)
);

CREATE TABLE tblContacts (
    contactId int primary key AUTO_INCREMENT,
    contactFirstName varchar(64) NOT NULL,
    contactLastName varchar(64) NOT NULL,
    contactPhoneNumber char(10) NOT NULL,
    contactWhatsappNumber char(10),
    contactEmail varchar(255),
    contactAddress JSON NOT NULL,
    contactAdditionaDetails varchar(255),
    contactIsActive char(1) NOT NULL default '1'
);

CREATE TABLE tblEmailsDetails (
    emailId int primary key AUTO_INCREMENT,
    emailAddress varchar(255) NOT NULL,
    emailIsActive char(1) NOT NULL default '1',
    contactId int,
);

CREATE TABLE tblWhatsappClients (
    clientId int primary key AUTO_INCREMENT,
    clientName varchar(64) NOT NULL,
    clientWhatsppNumber char(10) NOT NULL,
    clientAccountId varchar(64),
    clientBaseUrl varchar(128) NOT NULL,
    clientApiKey varchar(300),
    clientTestMode char(1) NOT NULL default '0',
    clientIsActive char(1) NOT NULL default '1',
    clientIsDeleted char(1) NOT NULL default '0',
    clientCreatedDate datetime NOT NULL default CURRENT_TIMESTAMP
);

CREATE TABLE tblBankDetails (
    bankId int primary key AUTO_INCREMENT,
    bankName varchar(128) NOT NULL,
    bankAccountNumber char(18) NOT NULL,
    bankAddress JSON NOT NULL,
    bankIfscCode char(11) NOT NULL,
    bankAccountMinimumAmount decimal(10,2) NOT NULL,
    bankAccountBalance decimal(13,2),
    bankContactId int NOT NULL,
    bankAccountIsActive char(1) NOT NULL default '1',
);

CREATE TABLE tblCardDetails (
    cardId int primary key AUTO_INCREMENT,
    cardNumber char(16) NOT NULL,
    cardExpiryDate varchar(5) NOT NULL,
    cardCvv char(3) NOT NULL,
    cardPassword char(6) NOT NULL,
    cardHolderName varchar(64) NOT NULL,
    cardContactId int NOT NULL,
    carIsActive char(1) NOT NULL
    cardCreatedDate datetime NOT NULL default CURRENT_TIMESTAMP
);

CREATE TABLE tblUpiDetails (
    upiId int primary key AUTO_INCREMENT,
    upiName varchar(64) NOT NULL,
    upiAppName varchar(128) NOT NULL,
    upiUpiId varchar(20) NOT NULL,
    upiPassword char(6) NOT NULL,
    upiContactId int NOT NULL,
    upiIsActive char(1) NOT NULL default '1',
    upiCreatedDate datetime NOT NULL default CURRENT_TIMESTAMP
);

CREATE TABLE tblPaymentMethods (
    paymentMethodId int primary key AUTO_INCREMENT,
    paymentMethodName varchar(32) NOT NULL,
    paymentMethodType char(1) NOT NULL default '0',
    paymentMethodCharge decimal(10,2) NOT NULL default 0.00,
    paymentMethodBankId int NOT NULL,
    paymentMethodIsActive char(1) NOT NULL default '1',
    FOREIGN KEY paymentMethodBankId REFERENCES tblBankDetails (bankId)
);

CREATE TABLE tblTransections (
    transactionId int primary key AUTO_INCREMENT,
    transactionUserId int NOT NULL,
    transectionPaymentMeyhodId int NOT NULL,
    transectionTitle varchar(128) NOT NULL,
    transectionAmount decimal(13,2) NOT NULL,
    transectionType char(1) NOT NULL default '0',
);

CREATE TABLE tblEmailTemplates (
    templateId int primary key AUTO_INCREMENT,
    templateName varchar(64) NOT NULL,
    templateSubject varchar(128) NOT NULL,
    templateBody text NOT NULL,
    templateIsActive char(1) NOT NULL default '1'
);

CREATE TABLE tblWhatsappTemplates (
    templateId int primary key AUTO_INCREMENT,
    templateName varchar(64) NOT NULL,
    templateWhatsappClientId int NOT NULL,
    templateWhatsappClientIdentifier varchar(128) NOT NULL,
    templateMessage text NOT NULL,
    templateVariableCount int NOT NULL deafult 0,
    templateIsActive char(1) NOT NULL default '1',
    templateCreatedDate datetime NOT NULL default CURRENT_TIMESTAMP
);

CREATE TABLE tblMails (
    mailId int primary key AUTO_INCREMENT,
    mailFrom varchar(255) NOT NULL,
    mailTo varchar(255) NOT NULL,
    mailCc varchar(255),
    mailBcc varchar(255),
    mailBody text NOT NULL,
    mailType char(1) NOT NULL default '0',
    mailHasAttachments int,
    mailParentId int,
);

CREATE TABLE tblMailAttachments (
    attachmentId int primary key AUTO_INCREMENT,
    attachmentMailId int NOT NULL,
    attachmentFileName varchar(255) NOT NULL,
    attachmentFilePath varchar(128) NOT NULL,
    attachmentSize decimal(6,2) NOT NULL,
    attachmentSizeUnit char(2) not null default 'kb',
    attachmentIsDeleted char(1) NOT NULL default '0',
    FOREIGN KEY (attachmentMailId) REFERENCES tblMails (mailId)
);