var React = require('react');

var Spinner = React.createClass({
  render: function() {
    if(this.props.loaded === false) {
      return (
        <div className='spinner'>
          <div className='double-bounce1'></div>
          <div className='double-bounce2'></div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
});

module.exports = Spinner;
