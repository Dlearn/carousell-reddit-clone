// src/components/Post/index.js

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Post extends Component {
  render() {
    let post = this.props.posts[this.props.i];
    let numbering = parseInt(this.props.i, 10) + 1;

    return (
      <div className="jumbotron">
        <h2>{numbering}: { post.title }</h2>
        <br />
        <Button 
          onClick= { () => this.props.handleUpvote(post) }
          bsStyle="success" 
          bsSize="small"
        >
          Upvote
        </Button>
        <div>Upvotes: { post.upvotes }</div>
        <Button
          onClick= { () => this.props.handleDownvote(post) }
          bsStyle="danger" 
          bsSize="small"
        >
          Downvote
        </Button>
        <div>Downvotes: { post.downvotes }</div>
      </div>
    );
  }
}

export default Post;