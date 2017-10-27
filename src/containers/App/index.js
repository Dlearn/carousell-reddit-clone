// src/containers/App/index.js

import React, { Component } from 'react';
import { PageHeader, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { defaultPosts } from './defaultPosts'

import 'bootstrap/dist/css/bootstrap.css';

class AddPost extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };
  }

  getValidationState() {
    const length = this.state.input.length;
    if (length > 255) return 'error';
    else if (length > 0) return 'success';
    return null;
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (isLegalPostTitle(this.state.input)) { 
      this.props.createNewPost(this.state.input);
    }

    this.setState({ input: "" });
  } 

  render() {
    return (
      <form 
        className="jumbotron container"
        onSubmit={this.handleSubmit}
      >
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
          bsSize="large"
        >
          <ControlLabel>Create New Post</ControlLabel>
          <FormControl 
            type="text"
            value={this.state.input}
            placeholder="Write the title of your new post."
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

class Post extends Component {
  render() {
    let post = this.props.posts[this.props.i];
    let numbering = parseInt(this.props.i) + 1;

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
      <div className="container">
        <PageHeader>Carousell Reddit Clone <small>by Dylan Ho</small></PageHeader>
        <AddPost 
          createNewPost = { (input) => _this.createNewPost(input) }
        />

        <div>
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

function isLegalPostTitle(s) {
  let isEmptyString = s === "";
  let isWhitespace = !/\S/.test(s);
  let isLongerthan255 = s.length > 255;

  if (isEmptyString || isWhitespace) {
    alert("Please input non empty title!");
    return false;
  }

  else if (isLongerthan255) {
    alert("Title has max length 255 characters!");
    return false;
  }

  return true;
}

function sortPosts(posts) {
  let postsClone = posts.slice();
  postsClone.sort(function(a, b) { return b.upvotes - a.upvotes; })
  return postsClone;
}

export default App;