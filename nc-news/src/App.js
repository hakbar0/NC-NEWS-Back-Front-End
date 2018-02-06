import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Link } from 'react-router-dom';
import Articles from './components/articles'
import Article from './components/article'
import Topics from './components/topics'
import Topic from './components/topic'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Articles} />
            <Route exact path = "/article/:id" render={(params) => <Article {...params} />} />
            <Route exact path="/topics" component={Topics} />
            <Route exact path="/topics/:topic" render ={(params) => <Topic {...params} />} />
            <Route component={this.NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  NoMatch = () => (
    <div className='container four-zero-four'>
    </div>);
}

export default App;
