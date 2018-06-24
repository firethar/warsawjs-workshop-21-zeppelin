import React from "react";
import { connect } from "react-redux";
import { commentsFetch } from "../actions/comments/";
import { postsFetch } from "../actions/posts/";
import isLoggedIn from "../components/isLoggedIn";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const mapsStateToProps = (state, props) => ({
  post: state.posts.posts.find(post => post.id === props.match.params.id),
  comments: state.comments.comments[props.match.params.id] || []
});

class PostsById extends React.Component {
  async componentDidMount() {
    const id = this.props.match.params.id;

    this.props.dispatch(postsFetch());
    this.props.dispatch(commentsFetch(id));
  }
  render() {
    if(!this.props.post) {
      return "Loading...";
    }
    // const postImage = this.props.post.image;

    const comments = this.props.comments.map(comment => (
      <ListItem> 
        <ListItemText> 
        <h3> {comment.username}</h3>
        <p> {comment.body} </p>
        </ListItemText> 
      </ListItem>
      
    ));

    return (
      <div> 
      <h1>{ this.props.post.title}</h1>
      <img src={this.props.post.image} alt=""/>
      <h2>Comments</h2>
      <List>
         { comments } 
      </List>
      </div>
    );
  }
}

export default isLoggedIn(connect(mapsStateToProps)(PostsById));