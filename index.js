import request from 'request';
import OAuth from 'oauth-1.0a';
import { createHmac } from 'crypto';

class NetSuiteOAuth {
    constructor(url, method, consumerKey, consumerSecret, tokenId, tokenSecret, account) {
        this.oauth = OAuth({
            consumer: {
                key: consumerKey,
                secret: consumerSecret
            },
            realm: account,
            signature_method: 'HMAC-SHA256',
            hash_function(base_string, key) {
                return createHmac('sha256', key).update(base_string).digest('base64');
            }
        });

        this.request_data = {
            url: url,
            method: method
        };

        this.token = {
            key: tokenId,
            secret: tokenSecret
        };

        this.headers = this.oauth.toHeader(this.oauth.authorize(this.request_data, this.token));
        this.headers['Content-Type'] = 'application/json';
    }
    get() {
        return new Promise((resolve, reject) => {
            request({
                url: this.request_data.url,
                method: this.request_data.method,
                headers: this.headers
            }, function (error, response, body) {
                if (error || response.statusCode.toString()[0] != 2) {
                    console.log('Body data:', body);
                    reject(body || error);
                }
                else {
                    if (typeof body == 'string')
                        body = JSON.parse(body);
                    resolve(body || error);
                }
            });

        });
    }
    post(data) {
        return new Promise((resolve, reject) => {
            request({
                url: this.request_data.url,
                method: this.request_data.method,
                json: data,
                headers: this.headers
            }, function (error, response, body) {
                if (error || response.statusCode.toString()[0] != 2) {
                    console.log('Body data:', body);
                    reject(body || error);
                }
                else {
                    if (typeof body == 'string') {
                        try {
                            body = JSON.parse(body);
                        } catch (error) {
                            console.log('unable to parse response body');
                            reject(error);
                        }
                    }
                    resolve(body || error);
                }
            });

        });
    }
    put(data) {
        return new Promise((resolve, reject) => {
            request({
                url: this.request_data.url,
                method: this.request_data.method,
                json: data,
                headers: this.headers
            }, function (error, response, body) {
                if (error || response.statusCode.toString()[0] != 2) {
                    console.log('Body data:', body);
                    reject(body || error);
                }
                else {
                    if (typeof body == 'string') {
                        try {
                            body = JSON.parse(body);
                        } catch (error) {
                            console.log('unable to parse response body');
                            reject(error);
                        }
                    }
                    resolve(body || error);
                }
            });

        });
    }
}

export default NetSuiteOAuth;