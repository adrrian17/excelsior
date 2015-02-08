var React = require('react');

var Pager = React.createClass({
  getInitialState: function() {
    return { currentPage: this.props.page };
  },

  handleClick: function(e) {
    e.preventDefault();

    var page = e.target.dataset.page;

    this.setState({ currentPage: page });
    this.props.changePage(page)
  },

  getPagerLinks: function() {
    var page = this.state.currentPage;

    if(page > 0) {
      return (
        <div>
          <li>
            <a href="#" data-page={page - 1} onClick={this.handleClick}>Previous</a>
          </li>
          <li>
            <a href="#" data-page={page + 1} onClick={this.handleClick}>Next</a>
          </li>
        </div>
      )
    } else {
      return (
        <div>
          <li>
            <a href="#" data-page={page + 1} onClick={this.handleClick}>Next</a>
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
