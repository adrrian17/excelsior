var request = require('superagent');
var Q = require('q');

// Marvel public API key
var key = process.env.API_KEY;

var charactersUrl = 'http://gateway.marvel.com/v1/public/characters'

exports.getCharacters = function(offset) {
  var deferred = Q.defer();

  request
    .get(charactersUrl)
    .query({ apikey: key })
    .query({ offset: offset })
    .end(function(res) {
      deferred.resolve(res.body.data);
    });

  return deferred.promise;
};
