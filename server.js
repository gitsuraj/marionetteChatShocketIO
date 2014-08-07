
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , socketio = require('socket.io')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/regUsers',function(req,res){
  var userlist = []
      i = 0;
  for(i = 1;i<=100;i=i+1){
    userlist.push({'name':'User'+i});
  }
  res.send(userlist);
})

var server = http.createServer(app);
var io = socketio.listen(server);
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var ChatServer = require('./socket/chatserver');
new ChatServer({ io: io }).init();