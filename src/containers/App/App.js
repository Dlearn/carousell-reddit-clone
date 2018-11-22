// src/containers/App/App.js

import React, { PureComponent } from 'react';
import { PageHeader } from 'react-bootstrap';

import AddPost from '../../components/AddPost/AddPost';
import Posts from '../../components/Posts/Posts';
import type { Post as PostType } from '../../data/Post';

import defaultPosts from './defaultPosts';

type State = {
  posts: PostType[],
};

class App extends PureComponent<{}, State> {
  constructor() {
    super();

    // Populate the list with some dummy posts.
    this.state = {
      posts: defaultPosts,
    };
  }

  createNewPost = (postTitle: string) => {
    const posts = this.state.posts.slice();
    posts.push({
      title: postTitle,
      hoursAgo: 0,
      author: 'Dylan',
      votes: 0,
    });

    this.setState({ posts: sortPosts(posts) });
  };

  handleUpvote = (index: number) => {
    const posts = this.state.posts.slice();
    posts[index].votes += 1;

    this.setState({ posts: sortPosts(posts) });
  };

  handleDownvote = (index: number) => {
    const posts = this.state.posts.slice();
    posts[index].votes -= 1;

    this.setState({ posts: sortPosts(posts) });
  };

  render() {
    // Filter the top 20 posts in the post array
    const filteredPosts = this.state.posts.slice(0, 20);

    return (
      <div className="container">
        <PageHeader>
          <strong>Reddit Clone</strong>
        </PageHeader>
        <AddPost createNewPost={this.createNewPost} />

        <Posts
          posts={filteredPosts}
          handleUpvote={i => this.handleUpvote(i)}
          handleDownvote={i => this.handleDownvote(i)}
        />
      </div>
    );
  }
}

export function sortPosts(posts: PostType[]): PostType[] {
  const postsClone = posts.slice();
  postsClone.sort((a, b) => b.votes - a.votes);
  return postsClone;
}

export default App;
