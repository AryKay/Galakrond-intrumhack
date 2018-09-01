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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NordeaOpenBankingApi) {
      root.NordeaOpenBankingApi = {};
    }
    root.NordeaOpenBankingApi.AccountNumber = factory(root.NordeaOpenBankingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountNumber model module.
   * @module model/AccountNumber
   * @version 2.2
   */

  /**
   * Constructs a new <code>AccountNumber</code>.
   * Account number
   * @alias module:model/AccountNumber
   * @class
   * @param type {module:model/AccountNumber.TypeEnum} Type of account number
   * @param value {String} Actual account number
   */
  var exports = function(type, value) {
    var _this = this;

    _this['_type'] = type;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>AccountNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountNumber} obj Optional instance to populate.
   * @return {module:model/AccountNumber} The populated <code>AccountNumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_type')) {
        obj['_type'] = ApiClient.convertToType(data['_type'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of account number
   * @member {module:model/AccountNumber.TypeEnum} _type
   */
  exports.prototype['_type'] = undefined;
  /**
   * Actual account number
   * @member {String} value
   */
  exports.prototype['value'] = undefined;


  /**
   * Allowed values for the <code>_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "IBAN"
     * @const
     */
    "IBAN": "IBAN",
    /**
     * value: "BBAN_SE"
     * @const
     */
    "BBAN_SE": "BBAN_SE"  };


  return exports;
}));

