// src/containers/App/index.js

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { defaultPosts } from './defaultPosts'

import 'bootstrap/dist/css/bootstrap.css';

class AddPostForm extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };
  }

  getValidationState() {
    const length = this.state.input.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // if (isIllegalPostTitle(this.state.input)) { 
    //   this.setState({ input: "" });
    //   return;
    // }

    this.props.createNewPost(this.state.input);
    this.setState({ input: "" });
  } 

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          placeholder="Write the title of your new post."
          onChange={ this.handleChange }
          value={ this.state.input }
        />
        <Button
          type="submit"
          onClick={ this.handleSubmit }
        >
          Submit
        </Button>
      </form>
    );
  }
}

class Post extends Component {
  render() {
    let post = this.props.posts[this.props.i];
    return (
      <div>
        <div>Title: { post.title }</div>
        <Button 
          bsStyle="success" bsSize="small"
          onClick= { () => this.props.handleUpvote(post) }
        >
          Upvote
        </Button>
        <div>Upvotes: { post.upvotes }</div>
        <Button
          onClick= { () => this.props.handleDownvote(post) }
        >
          Downvote
        </Button>
        <div>Downvotes: { post.downvotes }</div>
      </div>
    );
  }
}

class App extends Component {
	constructor() {
  	super();

    let _this = this;
    this.state = {
      posts: [],
    };

    // Populate the list with some dummy posts.
    defaultPosts.forEach(function(post) {
      _this.state.posts.push(post);
    });
	}

  createNewPost = (postTitle) => {
    this.state.posts.push({
      title: postTitle,
      upvotes: 0,
      downvotes: 0,
    });

    this.setState({ posts: sortPosts(this.state.posts) });
  }    

  handleUpvote = (post) => {
    post.upvotes++;
    this.setState({ posts: sortPosts(this.state.posts) });
  }

  handleDownvote = (post) => {
    post.downvotes++;
    this.setState({ posts: this.state.posts });
  }

  render() {
    // To preserve the context for an iterator later
    let _this = this;

    let posts = this.state.posts;
    let displayedPosts = posts.slice(0,20);

    return (
      <div>
        <AddPostForm 
          createNewPost = { (input) => _this.createNewPost(input) }
        />

        <div className="Posts">
          { 
            Object.keys(displayedPosts).map(function(key) {
              return (
                <Post key = {key}
                  posts = { displayedPosts }
                  i = { key }
                  handleUpvote = { (post) => _this.handleUpvote(post) }
                  handleDownvote = { (post) => _this.handleDownvote(post) }
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

function isIllegalPostTitle(s) {
  let isEmptyString = s === "";
  let isWhitespace = !/\S/.test(s);
  let isLongerThan255 = s.length > 255;

  if (isEmptyString || isWhitespace) {
    alert("Please input non empty title!");
    return true;
  }

  if (isLongerThan255) {
    alert("Title of post has length limit of 255!");
    return true;
  }

  return false;
}

function sortPosts(posts) {
  let postsClone = posts.slice();
  postsClone.sort(function(a, b) { return b.upvotes - a.upvotes; })
  return postsClone;
}

export default App;