var React = require('react');

var Character = React.createClass({
  render: function () {
    return (
      <div className="character">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <div className="thumbnail">
            <img className="character-image" src={this.props.image}/>
            <div className="caption">
              <span className="character-name">{this.props.name}</span>
              <div className="character-description">
                <p>{this.props.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Character;
