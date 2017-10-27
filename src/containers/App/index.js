// src/containers/App/index.js

import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import AddPost from '../../components/AddPost';
import Post from '../../components/Post';

import { defaultPosts } from './defaultPosts';

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

function sortPosts(posts) {
  let postsClone = posts.slice();
  postsClone.sort(function(a, b) { return b.upvotes - a.upvotes; })
  return postsClone;
}

export default App;