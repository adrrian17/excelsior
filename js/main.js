var CharactersList = require('./characters-list');
var React = require('react');

var items = [
  {
    name: 'Test',
    image: 'http://placehold.it/350x300',
    description: 'Lorem Ipsum'
  },
  {
    name: 'Test',
    image: 'http://placehold.it/350x300',
    description: 'Lorem Ipsum'
  }
]

React.render(<CharactersList items={items}/>, document.getElementById('content'));
