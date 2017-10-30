// src/containers/App/App.js

import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import AddPost from '../../components/AddPost/AddPost';
import Posts from '../../components/Posts/Posts';

import { defaultPosts } from './defaultPosts';

class App extends Component {
	constructor() {
  	super();

    // To preserve the context for an iterator later
    const _this = this;
    this.state = {
      posts: [],
    };

    // Populate the list with some dummy posts.
    defaultPosts.forEach(function(post) {
      _this.state.posts.push(post);
    });
	}

  createNewPost = (postTitle) => {
    let posts = this.state.posts.slice();
    posts.push({
      title: postTitle,
      hoursAgo: 0,
      author: "Dylan",
      votes: 0,
    });
    
    this.setState({ posts: sortPosts(posts) });
  }    

  handleUpvote = (i) => {
    let posts = this.state.posts.slice();
    posts[i].votes++;

    this.setState({ posts: sortPosts(posts) });
  }

  handleDownvote = (i) => {
    let posts = this.state.posts.slice();
    posts[i].votes--;
    
    this.setState({ posts: sortPosts(posts) });
  }

  render() {
    // Filter the top 20 posts in the post array
    let filteredPosts = this.state.posts.slice(0, 20);

    return (
      <div className="container">
        <PageHeader><strong>Carousell Reddit Clone</strong></PageHeader>
        <AddPost 
          createNewPost = { (i) => this.createNewPost(i) }
        />

        <Posts
          posts = { filteredPosts }
          handleUpvote = { (i) => this.handleUpvote(i) }
          handleDownvote = { (i) => this.handleDownvote(i) }
        />
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