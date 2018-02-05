import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Link } from 'react-router-dom';
import Articles from './components/articles'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Articles} />
            <Route component={this.NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  NoMatch = () => (
    <div className='container four-zero-four'>
      {/* <img src='https://media.giphy.com/media/NTXqH1bUCfHBS/giphy.gif' /> */}
    </div>);
}

export default App;
