import React from "react";
import { connect } from "react-redux";
import { commentsFetch } from "../actions/comments/";


class PostsById extends React.Component {
  async componentDidMount() {
    const id = this.props.match.params.id;

    this.props.dispatch(commentsFetch(id));
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default connect()(PostsById)