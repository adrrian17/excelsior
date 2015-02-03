var React = require('react');

var Character = React.createClass({
  getThumbnail: function() {
    var image = 'http://placehold.it/250x250';

    if(this.props.character.thumbnail) {
      image = this.props.character.thumbnail.path+'.'+this.props.character.thumbnail.extension;
    }

    return (
      <img className="character-image" src={image}/>
    )
  },

  getName: function() {
    return (
      <span className="character-name">
        {this.props.character.name}
      </span>
    );
  },

  getDescription: function() {
    var description = this.props.character.description ? this.props.character.description : 'No description'

    return (
      <p>
        {description}
      </p>
    )
  },

  getLinks: function() {
    return (
      <p>
        <a href={this.props.character.urls[0].url}>Wiki</a>|
        <a href={this.props.character.urls[1].url}>More details</a>
      </p>
    )
  },

  render: function () {
    return (
      <div className="character">
        <div className="col-xs-12 col-sm-3">
          <div className="thumbnail">
            {this.getThumbnail()}
            <div className="caption">
              <span className="character-name">{this.getName()}</span>
              <div className="character-description">
                {this.getDescription()}
                {this.getLinks()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Character;
