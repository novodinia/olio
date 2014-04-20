var verror = require('verror');
var redis = require('node-redis');
var chokidar = require('chokidar');

client = redis.createClient();

var watcher = chokidar.watch('.', {ignored: /^\./, persistent: true});

watcher.on('error', function(error) {
 var error = new VError(error);
 client.rpush("error", error.toString());
})
