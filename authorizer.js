'use strict';

module.exports = (code) => {
  console.log('Authorizer was called');

  const clientId = process.env.SLACK_CLIENT_ID;
  const clientSecret = process.env.SLACK_CLIENT_SECRET;

  const oauthURL = 'https://slack.com/api/oauth.access?'
    + 'client_id=' + client_id + '&'
    + 'client_secret=' + client_secret + '&'
    + 'code=' + code;

  console.log(oauthURL);
};
