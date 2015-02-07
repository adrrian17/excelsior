var React = require('react');

var Pager = React.createClass({
  getInitialState: function() {
    return { page: 0 };
  },

  getPagerLinks: function() {
    if(this.state.page > 0) {
      return (
        <div>
          <li>
            <a href="#">Previous</a>
          </li>
          <li>
            <a href="#">Next</a>
          </li>
        </div>
      )
    } else {
      return (
        <div>
          <li>
            <a href="#">Next</a>
          </li>
        </div>
      )
    }
  },

  render: function() {
    return (
      <div>
        <nav>
          <ul className="pager">
            {this.getPagerLinks()}
          </ul>
        </nav>
      </div>
    )
  }
});

module.exports = Pager;
