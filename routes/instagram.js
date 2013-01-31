
coffee = require('coffee-script'),
Instagram = require('../lib/instagram');

module.exports = {
  get: function(req, res){
    Instagram.grab(req.params.handle).done(function(profile){

      if(typeof req.query.callback !== "undefined" && req.query.callback !== null){
        res.jsonp(profile);
      } else {
        res.json(profile);
      }
    });
  }
}
