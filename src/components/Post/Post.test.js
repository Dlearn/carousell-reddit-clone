// src/component/Post/Post.test.js

import React from 'react';
import { mount } from 'enzyme';
import Post from './Post';

const posts = [
  { 
    title: "Why isn't Trump impeached yet?",
    hoursAgo: 90,
    author: "crazymunch",
    votes: 100, 
  },
];

describe('Post properly rendered', () => {
  const wrapper = mount(
    <Post 
      posts = { posts }
      i = { 0 }
    />
  );

  const title = wrapper.find('#title');
  const subtitle = wrapper.find('#subtitle');
  const votes = wrapper.find('#votes');
  const upvoteButton = wrapper.find('Button#upvote-button');
  const downvoteButton = wrapper.find('Button#downvote-button');
  
  it('renders the title correctly', () => {
    expect(title.text()).toBe("1: Why isn't Trump impeached yet?");
  });

  it('renders the subtitle correctly', () => {
    expect(subtitle.text()).toBe("Submitted 90 hours ago by crazymunch.");
  });

  it('renders the votes correctly', () => {
    expect(votes.text()).toBe("Votes: 100");
  });

  it('renders the upvote-button correctly', () => {
    expect(upvoteButton.text()).toBe("Upvote");
  });

  it('renders the downvote-button correctly', () => {
    expect(downvoteButton.text()).toBe("Downvote");
  });
});

it('calls handleUpvote function correctly', () => {
  const handleUpvote = jest.fn();
  const wrapper = mount(
    <Post 
      posts = { posts }
      i = { 0 }
      handleUpvote = { handleUpvote }
    />
  );
  const upvoteButton = wrapper.find('Button#upvote-button');
  upvoteButton.simulate('click');
  expect(handleUpvote).toHaveBeenCalled();
});

it('calls handleUpvote function correctly', () => {
  const handleDownvote = jest.fn();
  const wrapper = mount(
    <Post 
      posts = { posts }
      i = { 0 }
      handleDownvote = { handleDownvote } 
    />
  );
  const downvoteButton = wrapper.find('Button#downvote-button');
  downvoteButton.simulate('click');
  expect(handleDownvote).toHaveBeenCalled();
});