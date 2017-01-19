var express = require('express');
var rp = require('request-promise');
var router = express.Router();
var config = require('../config/config.json');

router.post('/detect', function(req, res, next) {

  console.log(config.api_key);
  console.log(config.api_secret);
  console.log(req.body);

  var options = {
      method: 'POST',
      uri: 'https://api-cn.faceplusplus.com/facepp/v3/detect',
      form: {
        "api_key": config.api_key,
        "api_secret": config.api_secret,
        "image_url": req.body.image_url
      },
      json: true // Automatically parses the JSON string in the response
  };
  rp(options)
  .then(function(response) {
    response.on('data', function(data) {
      // compressed data as it is received
      console.log('received ' + data.length + ' bytes of compressed data')
    })
  })
  .catch(function (err) {
      // POST failed...
  });
});

router.post('/faceset/create', function(req, res, next) {

  var options = {
      method: 'POST',
      uri: 'https://api-cn.faceplusplus.com/facepp/v3/faceset/create',
      form: {
        "api_key": config.api_key,
        "api_secret": config.api_secret,
        "outer_id": req.body.outer_id,
        "display_name": req.body.display_name
      },
      json: true // Automatically parses the JSON string in the response
  };
  rp(options)
  .then(function(response) {
    response.on('data', function(data) {
      // compressed data as it is received
      console.log('received ' + data.length + ' bytes of compressed data')
    })
  })
  .catch(function (err) {
      // POST failed...
  });
});

router.post('/faceset/addface', function(req, res, next) {

    var options = {
        method: 'POST',
        uri: 'https://api-cn.faceplusplus.com/facepp/v3/faceset/addface',
        form: {
          "api_key": config.api_key,
          "api_secret": config.api_secret,
          "outer_id": req.body.outer_id,
          "face_tokens": req.body.face_tokens
        },
        json: true // Automatically parses the JSON string in the response
    };
    rp(options)
    .then(function(response) {
      response.on('data', function(data) {
        // compressed data as it is received
        console.log('received ' + data.length + ' bytes of compressed data')
      })
    })
    .catch(function (err) {
        // POST failed...
    });
});

router.post('/search', function(req, res, next) {

  var options = {
      method: 'POST',
      uri: 'https://api-cn.faceplusplus.com/facepp/v3/search',
      form: {
        "api_key": config.api_key,
        "api_secret": config.api_secret,
        "outer_id": req.body.outer_id,
        "image_url": req.body.image_url
      },
      json: true // Automatically parses the JSON string in the response
  };
  rp(options)
  .then(function(response) {
    response.on('data', function(data) {
      // compressed data as it is received
      console.log('received ' + data.length + ' bytes of compressed data')
    })
  })
  .catch(function (err) {
      // POST failed...
  });
});

module.exports = router;
