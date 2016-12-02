const React = require('react')
const ReactDOM = require('react-dom')

//const App = () => <h1>Minesweeper</h1>
const App = require('./app')
ReactDOM.render(<App />, document.getElementById('root'))
