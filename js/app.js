var CharactersGrid = require('./characters-grid');
var NavBar = require('./navbar');
var React = require('react');
var request = require('superagent');

// Marvel public API key
require('./api-key');

var baseUrl = 'http://gateway.marvel.com'
var charactersUrl = baseUrl+'/v1/public/characters?'+key

var ExcelsiorApp = React.createClass({
  getInitialState: function() {
    return { items: '' };
  },

  componentDidMount: function() {
    request.get(charactersUrl, function(res) {
        this.setState({ items: res.body.data.results })
      }.bind(this)
    );
  },

  render: function() {
    return (
      <div>
        <NavBar/>
        <div className='container'>
          <CharactersGrid items={this.state.items}/>
        </div>
      </div>
    );
  }
})

module.exports = ExcelsiorApp;
