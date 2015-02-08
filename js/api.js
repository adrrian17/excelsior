var request = require('superagent');
var Q = require('q');

// Marvel public API key
require('./api-key');

var baseUrl = 'http://gateway.marvel.com'
var charactersUrl = baseUrl+'/v1/public/characters?'+key

exports.getCharacters = function(offset) {
  var deferred = Q.defer();

  request
    .get(charactersUrl)
    .query({ offset: offset })
    .end(function(res) {
      deferred.resolve(res.body.data);
    });

  return deferred.promise;
};
