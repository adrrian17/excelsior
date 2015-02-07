var request = require('superagent');
var Q = require('q');

// Marvel public API key
require('./api-key');

var baseUrl = 'http://gateway.marvel.com'
var charactersUrl = baseUrl+'/v1/public/characters?'+key

exports.getCharacters = function() {
  var deferred = Q.defer();

  request
    .get(charactersUrl)
    .end(function(res) {
      deferred.resolve(res.body.data.results);
    });

  return deferred.promise;
};
