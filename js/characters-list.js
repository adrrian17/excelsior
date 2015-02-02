var Character = require('./character');
var React = require('react');
var _ = require('underscore')

var CharactersList = React.createClass({
  render: function () {
    return (
      <div>
      {
        this.props.items.map(function(item, index) {
          var name = item.name;
          var image = item.image;
          var description = item.description;

          return <Character key={index} name={name} image={image} description={description}/>;
        })
      }
      </div>
    );
  }
});

module.exports = CharactersList;
