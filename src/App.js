import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Login from  './views/Login';
import Posts from  './views/Posts';
import PostsById from  './views/PostsById';
import CreatePost from "./views/CreatePost";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route path="/" component={Login} exact ></Route>
            <Route path="/posts" component={Posts} exact ></Route>
            <Route path="/posts/:id" component={PostsById} exact ></Route>
            <Route path="/create-post/" component={CreatePost}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
