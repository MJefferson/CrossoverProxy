
/**
 * Module dependencies.
 */

var http = require('http')
  , express = require('express')
  , routes = require('./routes')
  , coffee = require('coffee-script')
  , Instagram = require('./lib/instagram');

var app = module.exports = express();
var server = http.createServer(app);

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/instagram/:handle', routes.instagram.get);

server.listen(3020, function(){
  console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
});
