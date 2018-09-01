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
    root.NordeaOpenBankingApi.Pagination = factory(root.NordeaOpenBankingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Pagination model module.
   * @module model/Pagination
   * @version 2.2
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * Details of paginated response
   * @alias module:model/Pagination
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pagination} obj Optional instance to populate.
   * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('continuationKey')) {
        obj['continuationKey'] = ApiClient.convertToType(data['continuationKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * Resource listing may return a continuationKey if there's more results available. Request may be retried with the continuationKey, but otherwise same parameters, in order to get more results.
   * @member {String} continuationKey
   */
  exports.prototype['continuationKey'] = undefined;



  return exports;
}));


