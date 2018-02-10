import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Link } from 'react-router-dom';
import Navbar from './components/navbar'
import Articles from './components/articles'
import Article from './components/article'
import Topics from './components/topics'
import Topic from './components/topic'
import CreateStory from './components/createstory'
import Users from './components/users'
import UserArticles from './components/userArticles'
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Articles} />
            <Route exact path="/article/:id" render={(params) => <Article {...params} />} />
            <Route exact path="/topics" component={Topics} />
            <Route exact path="/topics/:topic" render={(params) => <Topic {...params} />} />
            <Route exact path="/create-story" render={(params) => <CreateStory {...params} />} />
            <Route exact path="/users/:name" render={(params) => <UserArticles {...params} />} />
            <Route exact path="/users" component={Users} />
            <Route component={this.NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  NoMatch = () => (
      <div className='four-zero-four'><img src='https://media.giphy.com/media/GGP4dpOtItmuI/giphy.gif' alt='Please leave...' /></div>)
}

export default App;
