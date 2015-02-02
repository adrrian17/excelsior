var Character = require('./character');
var React = require('react');

var CharactersList = React.createClass({
  render: function () {
    return (
      <div>
      {
        this.props.items.map(function(item, index) {
          var name = item.name;
          var image = item.thumbnail.path+'.'+item.thumbnail.extension;
          var description = item.description ? item.description : 'No description';
          var details = item.urls[0].url;

          return <Character key={index} details={details} name={name} image={image} description={description}/>;
        })
      }
      </div>
    );
  }
});

module.exports = CharactersList;
