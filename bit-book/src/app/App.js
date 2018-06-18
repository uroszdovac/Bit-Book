import React, { Component } from 'react';
import './App.css';
import Home from '../app/home/HomePage';
import Feed from '../app/feed/FeedPage';
import People from '../app/people/PeoplePage';
import Profile from '../app/profile/ProfilePage';
import SingleFeedItem from '../app/singleFeedItem/SingleFeedItemPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    console.log(user)
    if (user) {
      this.setState({
        isLoggedIn: true
      })
    }
  }

  componentDidUpdate() {
    const user = localStorage.getItem('user');
    if (user) {
      if (this.state.isLoggedIn !== true) {
        this.setState({
          isLoggedIn: true
        })
      }
    }
    else {
      if (this.state.isLoggedIn === true) { //ako ne postoji user a setovano je na true onda promeni 
        this.setState({
          isLoggedIn: false
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <Switch>
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/people" component={People} />
            <Route path="/people/:id" component={Profile} />
            <Route path="/profile" component={Profile} />
            <Route path="/feed/:type/:id" component={SingleFeedItem} />
            <Redirect from="/" to="/feed" />
          </Switch >
        ) : (
            <Switch>
              <Route exact path="/:mode" component={Home} />
              <Redirect from="/" to="/login" />
            </Switch >
          )}

      </div>
    );
  }
}

export default App;
