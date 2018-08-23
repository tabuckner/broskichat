'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    // app.start();

    // start socket.io
    app.io = require('socket.io')(app.start());
    app.io.on('connection', function(socket) {
      console.log('a user connected');

      socket.on('message-sent', function(data) {
        const msg = data.message;
        console.log(`message: ${msg}`);

        // Re-Emit the Message/{data}
        const serverEcho = { // FAKES A RESPONSE FOR TESTING
          userId: 2,
          message: `Server Echoes: ${data.message}`,
        };
        app.io.emit('message-received', serverEcho);
      });

      socket.on('disconnect', function() {
        console.log('user disconnected');
      });
    });
  }
});
