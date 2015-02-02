var React = require('react');

var Character = React.createClass({
  render: function () {
    return (
      <div className="row character">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-4">
              <img className="character-image" src={this.props.image}/>
            </div>
            <div className="col-xs-8">
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
