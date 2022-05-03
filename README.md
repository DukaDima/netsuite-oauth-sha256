# netsuite-oauth-sha256
# netsuite-oauth-sha256
This auxiliary module abstracts the authentication mechanism used by NetSuite Restlets.

Example of GET request

const NetSuiteOauth = require('netsuite-tba-oauth');
 
const url = 'restlet-url';
const method = 'GET';
const consumerKey = 'your-consumer-key';
const consumerSecret = 'your-consumer-secret';
const tokenId = 'token-id';
const tokenSecret = 'token-secret';
const account = 'account Id';
 
const oauth = new NetSuiteOauth(url, method, consumerKey, consumerSecret, tokenId, tokenSecret, account);
 
oauth.get().then(response => console.log(response));



Example of POST request

const NetSuiteOauth = require('netsuite-tba-oauth');
 
const url = 'restlet-url';
const method = 'POST';
const consumerKey = 'your-consumer-key';
const consumerSecret = 'your-consumer-secret';
const tokenId = 'token-id';
const tokenSecret = 'token-secret';
const account = 'account Id';
 
const oauth = new NetSuiteOauth(url, method, consumerKey, consumerSecret, tokenId, tokenSecret, account);
const data = {key: 'value'};
 
oauth.post(data).then(response => console.log(response));