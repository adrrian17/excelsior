var CharactersGrid = require('./characters-grid');
var NavBar = require('./navbar');
var React = require('react');
var API = require('./api');

var ExcelsiorApp = React.createClass({
  getInitialState: function() {
    return { items: [] };
  },

  componentDidMount: function() {
    API.getCharacters().then(function(res) {
      this.setState({ items: res });
    }.bind(this));
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
