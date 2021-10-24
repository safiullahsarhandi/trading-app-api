
const {client, PLAID_PRODUCTS,PLAID_COUNTRY_CODES} = require('../../../Services/PlaidApi');
const { getAccessToken, formatError, prettyPrintResponse } = require('../../../Utils/helpers');

/* 
 */

module.exports.getPlaidInfo = (request, response) => {
        let ITEM_ID;
        let ACCESS_TOKEN;
        if(request.headers['authorization']){

            ACCESS_TOKEN =  getAccessToken(request.headers['authorization']);
        }
        response.json({
          item_id: ITEM_ID,
          access_token: ACCESS_TOKEN,
          products: process.env.PLAID_PRODUCTS,
        });
};



  // Create a link token with configs which we can then use to initialize Plaid Link client-side.
// See https://plaid.com/docs/#create-link-token
// router.post('/create_link_token', );

module.exports.createLinkToken =  async (request, response) => {
    const configs = {
      user: {
        // This should correspond to a unique id for the current user.
        client_user_id: 'user-id',
      },
      client_name: 'CopyCat Trade',
      products: PLAID_PRODUCTS,
      country_codes: PLAID_COUNTRY_CODES,
      language: 'en',
    };
  
    if (process.env.PLAID_REDIRECT_URI !== '') {
      configs.redirect_uri = process.env.PLAID_REDIRECT_URI;
    }
  
    if (process.env.PLAID_ANDROID_PACKAGE_NAME !== '') {
      configs.android_package_name = process.env.PLAID_ANDROID_PACKAGE_NAME;
    }
    try {
      const createTokenResponse = await client.linkTokenCreate(configs);
      prettyPrintResponse(createTokenResponse);
      response.json(createTokenResponse.data);
    } catch (error) {
      prettyPrintResponse(error.response);
      return response.json(formatError(error.response));
    }
  }

module.exports.setAccessToken = async (request, response) => {
    PUBLIC_TOKEN = request.body.public_token;
    try {
      const tokenResponse = await client.itemPublicTokenExchange({
        public_token: PUBLIC_TOKEN,
      });
      prettyPrintResponse(tokenResponse);
      let access_token = tokenResponse.data.access_token;
      let item_id = tokenResponse.data.item_id;
      let transfer_id;
      if (PLAID_PRODUCTS.includes('transfer')) {
        transfer_id = await authorizeAndCreateTransfer(access_token);
      }
      response.json({
        access_token,
        item_id,
        error: null,
      });
    } catch (error) {
    //   prettyPrintResponse(error.response);
      return response.json(formatError(error.response));
    }
};