var Character = require('./character');
var React = require('react');

var CharactersList = React.createClass({
  render: function () {
    return (
      <div>
        {
          this.props.items.map(function(item, index) {
            return <Character key={index} character={item}/>;
          })
        }
      </div>
    );
  }
});

module.exports = CharactersList;
