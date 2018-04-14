'use strict';

const authorizer = require('./authorizer');

module.exports.authorization = (event, context, callback) => {
  const code = event.queryStringParameters.code;
  console.log(code);

  authorizer(code)
  .then( => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Authorization was called',
        input: event,
      }),
    };
    callback(null, response);
  })
  .catch(error => {
    console.log('error');
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: error,
        input: event,
      }),
    };
    callback(null, response);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.addTask = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'AddTask was called',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
