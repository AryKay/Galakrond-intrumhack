import ApiClient from "./nordea/ApiClient";
import NordeaAccountsApi from "./nordea/api/AccountsV2Api";

// ApiClient wrapper for ReactNative (client itself was generated using swagger-codegen)
// Note: Might need to add headers
// https://medium.com/@lupugabriel/using-swagger-codegen-with-reactnative-4493d98cac15
// Todo: implement oauth2 infrastructure and start using apis
class ApiClientBase extends ApiClient { 
	callApi(path, httpMethod, pathParams,queryParams,collectionQueryParams, headerParams, formParams, bodyParam,authNames, contentTypes, accepts,returnType, callback) {
	  return fetch(`${this.basePath}${path}`,
	    {
	      method: httpMethod
	    });
	}
}

export default class NordeaAccountsApiBase extends NordeaAccountsApi {
  constructor() {
    super(new ApiClientBase());
  }
}