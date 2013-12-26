var https = require('https');

exports.index = function(req, res){
  var record = {},
      options = {
        host: 'x-vinyl.herokuapp.com',
        path: '/items/random.json'
      };

  https.get(options, function(resp) {
    resp.on('data', function(chunk) {
      record = JSON.parse(chunk);
      record.record = chunk;
      res.render('index', record);
    });
  }).on("error", function(e){
    console.log("Got error: " + e.message);
  });
};
