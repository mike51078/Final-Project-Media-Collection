const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-711148.okta.com',
  token: '00hZ3dogSjmCt586JrAEnzeH0hEJIp2NaBykmS9qV2'
});

module.exports = client;