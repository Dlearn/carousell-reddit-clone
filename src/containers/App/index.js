// src/containers/App/index.js

import React, { Component } from 'react';

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

  handleUpvote = (post, key) => {
    post.upvotes++;
    this.sortPosts();
    this.forceUpdate();
  }

  handleDownvote = (post, key) => {
    post.downvotes++;
    this.forceUpdate();
  }

  sortPosts = () => this.state.posts.sort(function(a, b) { return b.upvotes - a.upvotes; })

  render() {
    let posts = this.state.posts;
    let _this = this;

    if (!posts) {
      console.log("No posts!");
      return false;
    }

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Write the title of your new post."
            onChange={ this.handleChange }
            value={ this.state.input }
          />
          <button
            type="submit"
            onClick={ this.handleSubmit }
          >
            Submit
          </button>
        </form>

        <div className="Posts">
          { Object.keys(posts).map(function(key) {
              return (
                <div key={key}>
                  <div>Ttile: { posts[key].title }</div>
                  <div>Upvotes: { posts[key].upvotes }</div>
                  <div>Downvotes: { posts[key].downvotes }</div>
                  <button
                    onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Upvote
                  </button>
                  <button
                    onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Downvote
                  </button>
                </div>
              );
          })}
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
    return true;
  }

  if (isLongerThan255) {
    alert("Title of post has length limit of 255!");
    return true;
  }

  return false;
}

export default App;