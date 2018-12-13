/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const Ad = bizSdk.Ad;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  'name' : 'My New Offers Ad',
  'adset_id' : '<adSetID>',
  'creative' : {'object_story_spec':{'page_id':'<pageID>','link_data':{'offer_id':'<offerID>','link':'https:\/\/www.facebook.com\/','message':'Great Deal','name':'30% off','image_hash':'<imageHash>'}}},
  'status' : 'PAUSED',
};
const ads = (new AdAccount(id)).createAd(
  fields,
  params
);
logApiCallResult('ads api call complete.', ads);