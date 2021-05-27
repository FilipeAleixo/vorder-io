var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


app.post('/contact', async function(req, res) {

  const name = req.body.name,
        email = req.body.email,
        message = req.body.message;

  const params = {
    Destination: {
      ToAddresses: ["filipe.b.aleixo@gmail.com"],
    },

    Message: {
      Body: {
        Text: { 
            Data: `Name: ${name}\nE-mail: ${email}\n\n-----\n\nMessage:\n\n${message}`
        },
      },
      Subject: { Data: `[vorder.io Contact Form] - Message from ${name}` },
    },
    Source: "admin@vorder.io",
  };

  try {

    const sesResponse = await ses.sendEmail(params).promise();
    res.json({status: true})
  }
  catch {
    res.json({status: false})
  }

  
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
