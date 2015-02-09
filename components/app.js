var CharactersGrid = require('./characters-grid');
var NavBar = require('./navbar');
var Pager = require('./pager');
var React = require('react');
var API = require('./api');

var ExcelsiorApp = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      currentPage: 0,
      offset: 0
    };
  },

  componentDidMount: function() {
    API.getCharacters().then(function(res) {
      this.setState({ items: res.results });
    }.bind(this));
  },

  handlePageRequest: function(page) {
    var currentPage = this.state.currentPage;
    var offset;

    if(page > currentPage) {
      offset = this.state.offset + 20;
    } else {
      offset = this.state.offset - 20;
    }

    API.getCharacters(offset).then(function(res) {
      this.setState({
        items: res.results,
        currentPage: page,
        offset: offset
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <NavBar/>
        <div className='container'>
          <CharactersGrid items={this.state.items}/>
          <Pager page={this.state.currentPage} changePage={this.handlePageRequest}/>
        </div>
      </div>
    );
  }
})

module.exports = ExcelsiorApp;
