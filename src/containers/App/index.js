// src/containers/App/index.js

import React, { Component } from 'react';

class Post extends Component {
  render() {
    let post = this.props.posts[this.props.i];
    console.log(post);
    return (
      <div key={ this.props.i }>
        <div>Title: { post.title }</div>
        <div>Upvotes: { post.upvotes }</div>
        <div>Downvotes: { post.downvotes }</div>
        <button 
          onClick= { () => this.props.handleUpvote(post) }
        >
          Upvote
        </button>
        <button
          onClick= { () => this.props.handleDownvote(post) }
        >
          Downvote
        </button>
      </div>
    );
  }
}

class App extends Component {
	constructor() {
  	super();

    this.state = {
      input: "",
      posts: [],
    };

    // Populate the list with some dummy posts.
    this.state.posts.push({
      title: "Why isn't Trump impeached yet?",
      upvotes: 100,
      downvotes: 43,
    });

    this.state.posts.push({
      title: "Everyone should watch Avatar: The Last Airbender.",
      upvotes: 5,
      downvotes: 2,
    });

    this.state.posts.push({
      title: "Manga, to read or not to read?",
      upvotes: 4,
      downvotes: 0,
    });

    this.state.posts.push({
      title: "Batman vs Superman is the best movie everr.",
      upvotes: -100,
      downvotes: 0,
    });
	}

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (isIllegalPostTitle(this.state.input)) { 
      this.setState({ input: "" });
      return;
    }

    this.state.posts.push({
      title: this.state.input,
      upvotes: 0,
      downvotes: 0,
    });

    this.sortPosts();
    this.setState({ input: "" });
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
    let posts = this.state.posts;

    if (!posts) {
      console.log("No posts!");
      return false;
    }

    let _this = this;
    return (
      <div className="Posts">
        { Object.keys(posts).map(function(key) {
            return (
              <Post 
                posts = { posts }
                i = { key }
                handleUpvote = { (post) => _this.handleUpvote(post) }
                handleDownvote = { (post) => _this.handleDownvote(post) }
              />
            );
        })}
      </div>
    );
  }
}

function isIllegalPostTitle(s) {
  let isEmptyString = s === "";
  let isWhitespace = !/\S/.test(s);
  let isLongerThan255 = s.length > 255;

  if (isEmptyString || isWhitespace) {
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