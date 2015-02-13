var Character = require('./character');
var React = require('react');
var chunk = require('lodash/array/chunk');

var CharactersGrid = React.createClass({
  getCharacters: function() {
    var items = chunk(this.props.items, 4)

    return (
      <div>
        {items.map(function(item, index) {
          return (
            <div key={index} className='row'>
              {item.map(function(char, index) {
                return <Character key={char.id} character={char}/>;
              })}
            </div>
          )
        })}
      </div>
    )
  },

  render: function () {
    return (
      <div>
        {this.getCharacters()}
      </div>
    );
  }
});

module.exports = CharactersGrid;
