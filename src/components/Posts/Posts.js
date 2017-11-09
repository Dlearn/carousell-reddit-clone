// src/components/Posts/Posts.js

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Post extends Component {
  constructor() {
    super();

    // This local variable in the component checks if the votes have changed in the new props.
    this.previousVotes = 0;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('Current votes: ' + this.props.post.votes);
    // console.log('Next votes: ' + nextProps.post.votes);
    const hasVotesChanged = this.previousVotes !== this.props.post.votes;
    return hasVotesChanged;
  }

  render() {
    // console.log(this.props.index);
    let post = this.props.post;
    this.previousVotes = post.votes;

    return (
      <div className="jumbotron">
        <h2 id="title">{ parseInt(this.props.index, 10) + 1 }: { post.title }</h2>
        <h4 id="subtitle" className="text-muted">Submitted {post.hoursAgo} hours ago by {post.author}.</h4>
        <br />
        <h4 id="votes">Votes: { post.votes }</h4>
        <Button 
          id = "upvote-button"
          onClick= { () => this.props.handleUpvote(this.props.index) }
          bsStyle="success" 
          bsSize="small"
        >
          Upvote
        </Button>
        <Button
          id = "downvote-button"
          onClick= { () => this.props.handleDownvote(this.props.index) }
          bsStyle="danger" 
          bsSize="small"
        >
          Downvote
        </Button>
      </div>
    );
  }
}

class Posts extends Component {
  render() {
    // To preserve the context for an iterator later
    const _this = this;

    return (
      this.props.posts.map(function(post, index) {
        return (
          <Post 
            key = { index + post.title }
            post = { post }
            index = { index }
            handleUpvote = { (i) => _this.props.handleUpvote(i) }
            handleDownvote = { (i) => _this.props.handleDownvote(i) }
          />
        );
      })
    );
  }
}

export default Posts;