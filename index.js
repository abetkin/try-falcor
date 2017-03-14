var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
var app = express();

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  return new Router([
    {
      route: 'greeting',
      get: function() {
        console.log('get greeting')
        return {path: ['greeting'], value: 'Hello'};
      },
    },
    {
      route: 'greeting',
      set: function(graph) {
        console.log('set greeting', graph)
        return {path: ['greeting'], value: 'Hi'};
      }
    },
  ]);
}));

// statically host all files in current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);