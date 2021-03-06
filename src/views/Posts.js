import React from "react";
import { connect } from "react-redux";
import { postsFetch } from "../actions/posts/";
import { Link } from "react-router-dom";
import isLoggedIn from "../components/isLoggedIn";


const mapsStateToProps = ({ posts }) => ({
  posts: posts.posts,
  fetching: posts.fetching,
});

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(postsFetch());
  }
  render() {
    const posts = this.props.posts.map(post => (
      <Link to={`/posts/${post.id}`} key={`posts-${post.id}`}>
        <h2>{post.title}</h2>
        <h3>{post.owner}</h3>
        <img src={post.image} alt=""/>
      </Link>
    ));

    return (
      <div>
        <Link to="/create-post">Create</Link>
        <h1>Posts</h1>
        { posts }
      </div>
    )
  }
}

export default isLoggedIn(connect(mapsStateToProps)(Posts));