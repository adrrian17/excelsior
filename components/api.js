var request = require('superagent');
var Q = require('q');

// Marvel public API key
var marvelKey = require('./api-key');

var charactersUrl = 'http://gateway.marvel.com/v1/public/characters'

exports.getCharacters = function(offset) {
  var deferred = Q.defer();

  request
    .get(charactersUrl)
    .query({ apikey: marvelKey.key })
    .query({ offset: offset })
    .end(function(res) {
      deferred.resolve(res.body.data);
    });

  return deferred.promise;
};
