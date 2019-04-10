import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddPost from './Containers/AddPost/AddPost';
import ShowPost from './Containers/ShowPost/ShowPost';
import EditPost from './Containers/EditPost/EditPost';
import SinglePost from './Containers/SinglePost/SinglePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        </div>
        <Switch>
          <Route path='/' exact component={AddPost} />
          <Route path='/posts' exact component={ShowPost} />
          <Route path='/posts/:id' exact component={SinglePost} />
          <Route path='/posts/edit/:id' component={EditPost} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
