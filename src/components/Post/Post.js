// src/components/Post/Post.js

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Post extends Component {
  render() {
    let post = this.props.posts[this.props.i];
    let numbering = parseInt(this.props.i, 10) + 1;

    return (
      <div className="jumbotron">
        <h2 id="title">{numbering}: { post.title }</h2>
        <h4 id="subtitle" className="text-muted">Submitted {post.hoursAgo} hours ago by {post.author}.</h4>
        <br />
        <h4 id="votes">Votes: { post.votes }</h4>
        <Button 
          id = "upvote-button"
          onClick= { () => this.props.handleUpvote(post) }
          bsStyle="success" 
          bsSize="small"
        >
          Upvote
        </Button>
        <Button
          id = "downvote-button"
          onClick= { () => this.props.handleDownvote(post) }
          bsStyle="danger" 
          bsSize="small"
        >
          Downvote
        </Button>
      </div>
    );
  }
}

export default Post;