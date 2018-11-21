// src/components/Posts/Posts.js

import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';

class Post extends Component {
  render() {
    const { handleDownvote, handleUpvote, index, post } = this.props;
    const postNumber = parseInt(index, 10) + 1;
    return (
      <Panel>
        <h2>{`${postNumber}: ${post.title}`}</h2>
        <h4 id="subtitle" className="text-muted">
          {`Submitted ${post.hoursAgo} hours ago by ${post.author}.`}
        </h4>
        <br />
        <h4 id="votes">{`Votes: ${post.votes}`}</h4>
        <Button
          id="upvote-button"
          onClick={() => handleUpvote(index)}
          bsStyle="success"
          bsSize="small"
        >
          Upvote
        </Button>
        <Button
          id="downvote-button"
          onClick={() => handleDownvote(index)}
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

    return posts.map((post, index) => (
      <Post
        key={post.title + post.author}
        post={post}
        index={index}
        handleUpvote={i => handleUpvote(i)}
        handleDownvote={i => handleDownvote(i)}
      />
    ));
  }
}

export default Posts;
