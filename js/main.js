var CharactersList = require('./characters-list');
var React = require('react');
var request = require('superagent');

// Marvel public API key
require('./api-key');

var baseUrl = 'http://gateway.marvel.com'
var charactersUrl = baseUrl+'/v1/public/characters?'+key

request.get(charactersUrl, function(res) {
  console.log(res.body.data.results)

  var items = res.body.data.results;
  React.render(<CharactersList items={items}/>, document.getElementById('content'));
});
