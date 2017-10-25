// src/containers/App/index.js

import React, { Component } from 'react';

class App extends Component {
	constructor() {
  	super();

  	this.state = {
      posts: [{
        title: "Hello World!",
        upvote: 5,
        downvote: 5,
      }],
    };
	}

  render() {
    let posts = this.state.posts;
    let _this = this;

    if (!posts) {
      console.log("No posts!");
      return false
    }

    return (
      <div className="Posts">
        { Object.keys(posts).map(function(key) {
            return (
              <div key={key}>
                <div>Ttile: { posts[key].title }</div>
                <div>Upvotes: { posts[key].upvote }</div>
                <div>Downvotes: { posts[key].downvote }</div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default App;