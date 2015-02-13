var React          = require('react');
var API            = require('./api');
var CharactersGrid = require('./characters-grid');
var NavBar         = require('./navbar');
var Pager          = require('./pager');
var Spinner        = require('./spinner');

var ExcelsiorApp = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      currentPage: 0,
      offset: 0,
      loaded: false
    };
  },

  componentDidMount: function() {
    API.getCharacters().then(function(res) {
      this.setState({
        items: res.results,
        loaded: true
      });
    }.bind(this));
  },

  handlePageRequest: function(page) {
    this.setState({ loaded: false });

    var currentPage = this.state.currentPage;
    var offset = 0;

    if(page > currentPage) {
      offset = this.state.offset + 20;
    } else {
      offset = this.state.offset - 20;
    }

    API.getCharacters(offset).then(function(res) {
      this.setState({
        items: res.results,
        currentPage: page,
        offset: offset,
        loaded: true
      });
    }.bind(this));
  },

  render: function() {
    var hide = this.state.loaded ? '' : 'hidden';

    return (
      <div>
        <NavBar/>
        <div className='container'>
          <Spinner loaded={this.state.loaded}/>
          <div className={hide}>
            <CharactersGrid items={this.state.items}/>
            <Pager
              page={this.state.currentPage}
              changePage={this.handlePageRequest}/>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = ExcelsiorApp;
