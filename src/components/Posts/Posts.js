// src/components/Posts/Posts.js

import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";

class Post extends Component {
  render() {
    let post = this.props.post;

    return (
      <Panel>
        <h2 id="title">
          {parseInt(this.props.index, 10) + 1}: {post.title}
        </h2>
        <h4 id="subtitle" className="text-muted">
          Submitted {post.hoursAgo} hours ago by {post.author}.
        </h4>
        <br />
        <h4 id="votes">Votes: {post.votes}</h4>
        <Button
          id="upvote-button"
          onClick={() => this.props.handleUpvote(this.props.index)}
          bsStyle="success"
          bsSize="small"
        >
          Upvote
        </Button>
        <Button
          id="downvote-button"
          onClick={() => this.props.handleDownvote(this.props.index)}
          bsStyle="danger"
          bsSize="small"
        >
          Downvote
        </Button>
      </Panel>
    );
  }
}

class Posts extends Component {
  render() {
    const { posts, handleDownvote, handleUpvote } = this.props;

    return posts.map(function(post, index) {
      return (
        <Post
          key={index + post.title}
          post={post}
          index={index}
          handleUpvote={i => handleUpvote(i)}
          handleDownvote={i => handleDownvote(i)}
        />
      );
    });
  }
}

export default Posts;
