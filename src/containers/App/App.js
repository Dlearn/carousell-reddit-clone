// src/containers/App/App.js

import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import AddPost from '../../components/AddPost/AddPost';
import Post from '../../components/Post/Post';

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
      hoursAgo: 0,
      author: "Dylan",
      votes: 0,
    });

    this.setState({ posts: sortPosts(this.state.posts) });
  }    

  handleUpvote = (post) => {
    post.votes++;
    this.setState({ posts: sortPosts(this.state.posts) });
  }

  handleDownvote = (post) => {
    post.votes--;
    this.setState({ posts: sortPosts(this.state.posts) });
  }

  render() {
    // To preserve the context for an iterator later
    let _this = this;

    let posts = this.state.posts;
    let displayedPosts = posts.slice(0,20);

    return (
      <div className="container">
        <PageHeader><strong>Carousell Reddit Clone</strong></PageHeader>
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

export function sortPosts(posts) {
  let postsClone = posts.slice();
  postsClone.sort(function(a, b) { return b.votes - a.votes; })
  return postsClone;
}

export default App;