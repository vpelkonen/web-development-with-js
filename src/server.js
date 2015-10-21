var port = 8888;

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/characterList', function(req, res, next) {

    res.send([
        {
            name: 'Name 1',
            concept: 'polo 1',
            description: 'desc'
        },
        {
            name: 'Name 2',
            concept: 'polo 2',
            description: 'desc'
        },
        {
            name: 'Name 3',
            concept: 'polo 3',
            description: 'desc'
        },
        {
            name: 'Name 3',
            concept: 'polo 3',
            description: 'desc'
        },
        {
            name: 'Name 3',
            concept: 'polo 3',
            description: 'desc'
        },
        {
            name: 'Name 3',
            concept: 'polo 3',
            description: 'desc'
        },
        {
            name: 'Name 3',
            concept: 'polo 3',
            description: 'desc'
        },
        {
            name: 'Name 3',
            concept: 'polo 3',
            description: 'desc'
        },
        {
            name: 'Name 3',
            concept: 'polo 3',
            description: 'desc'
        }
    ]);

});

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../web/index.dev.html'));
});


app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});


