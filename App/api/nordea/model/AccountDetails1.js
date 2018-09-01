/**
 * Nordea Open Banking API
 * Open Banking API
 *
 * OpenAPI spec version: 2.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountNumber', 'model/BankInfo', 'model/Link'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountNumber'), require('./BankInfo'), require('./Link'));
  } else {
    // Browser globals (root is window)
    if (!root.NordeaOpenBankingApi) {
      root.NordeaOpenBankingApi = {};
    }
    root.NordeaOpenBankingApi.AccountDetails1 = factory(root.NordeaOpenBankingApi.ApiClient, root.NordeaOpenBankingApi.AccountNumber, root.NordeaOpenBankingApi.BankInfo, root.NordeaOpenBankingApi.Link);
  }
}(this, function(ApiClient, AccountNumber, BankInfo, Link) {
  'use strict';




  /**
   * The AccountDetails1 model module.
   * @module model/AccountDetails1
   * @version 2.2
   */

  /**
   * Constructs a new <code>AccountDetails1</code>.
   * @alias module:model/AccountDetails1
   * @class
   * @param id {String} 
   * @param accountName {String} 
   * @param accountNumber {module:model/AccountNumber} 
   * @param accountNumbers {Array.<module:model/AccountNumber>} 
   * @param accountType {module:model/AccountDetails1.AccountTypeEnum} 
   * @param availableBalance {String} 
   * @param bank {module:model/BankInfo} 
   * @param bookedBalance {String} 
   * @param currency {String} Currency code according to ISO 4217
   * @param product {String} 
   * @param status {module:model/AccountDetails1.StatusEnum} 
   */
  var exports = function(id, accountName, accountNumber, accountNumbers, accountType, availableBalance, bank, bookedBalance, currency, product, status) {
    var _this = this;

    _this['_id'] = id;

    _this['accountName'] = accountName;
    _this['accountNumber'] = accountNumber;
    _this['accountNumbers'] = accountNumbers;
    _this['accountType'] = accountType;
    _this['availableBalance'] = availableBalance;
    _this['bank'] = bank;
    _this['bookedBalance'] = bookedBalance;


    _this['currency'] = currency;


    _this['product'] = product;
    _this['status'] = status;

  };

  /**
   * Constructs a <code>AccountDetails1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountDetails1} obj Optional instance to populate.
   * @return {module:model/AccountDetails1} The populated <code>AccountDetails1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = ApiClient.convertToType(data['_links'], [Link]);
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('accountNumber')) {
        obj['accountNumber'] = AccountNumber.constructFromObject(data['accountNumber']);
      }
      if (data.hasOwnProperty('accountNumbers')) {
        obj['accountNumbers'] = ApiClient.convertToType(data['accountNumbers'], [AccountNumber]);
      }
      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
      if (data.hasOwnProperty('availableBalance')) {
        obj['availableBalance'] = ApiClient.convertToType(data['availableBalance'], 'String');
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = BankInfo.constructFromObject(data['bank']);
      }
      if (data.hasOwnProperty('bookedBalance')) {
        obj['bookedBalance'] = ApiClient.convertToType(data['bookedBalance'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('creditLimit')) {
        obj['creditLimit'] = ApiClient.convertToType(data['creditLimit'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('latestTransactionBookingDate')) {
        obj['latestTransactionBookingDate'] = ApiClient.convertToType(data['latestTransactionBookingDate'], 'Date');
      }
      if (data.hasOwnProperty('ownerName')) {
        obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = ApiClient.convertToType(data['product'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('valueDatedBalance')) {
        obj['valueDatedBalance'] = ApiClient.convertToType(data['valueDatedBalance'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {Array.<module:model/Link>} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * @member {module:model/AccountNumber} accountNumber
   */
  exports.prototype['accountNumber'] = undefined;
  /**
   * @member {Array.<module:model/AccountNumber>} accountNumbers
   */
  exports.prototype['accountNumbers'] = undefined;
  /**
   * @member {module:model/AccountDetails1.AccountTypeEnum} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * @member {String} availableBalance
   */
  exports.prototype['availableBalance'] = undefined;
  /**
   * @member {module:model/BankInfo} bank
   */
  exports.prototype['bank'] = undefined;
  /**
   * @member {String} bookedBalance
   */
  exports.prototype['bookedBalance'] = undefined;
  /**
   * Country code where the account is held according to ISO ALPHA-2
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} creditLimit
   */
  exports.prototype['creditLimit'] = undefined;
  /**
   * Currency code according to ISO 4217
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {Date} latestTransactionBookingDate
   */
  exports.prototype['latestTransactionBookingDate'] = undefined;
  /**
   * @member {String} ownerName
   */
  exports.prototype['ownerName'] = undefined;
  /**
   * @member {String} product
   */
  exports.prototype['product'] = undefined;
  /**
   * @member {module:model/AccountDetails1.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} valueDatedBalance
   */
  exports.prototype['valueDatedBalance'] = undefined;


  /**
   * Allowed values for the <code>accountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountTypeEnum = {
    /**
     * value: "Current"
     * @const
     */
    "Current": "Current"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "OPEN"
     * @const
     */
    "OPEN": "OPEN",
    /**
     * value: "CLOSED"
     * @const
     */
    "CLOSED": "CLOSED"  };


  return exports;
}));


