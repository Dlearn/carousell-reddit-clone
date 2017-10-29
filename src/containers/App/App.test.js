// src/containers/App/App.test.js

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App, { sortPosts } from './App';
import Post from './../../components/Post/Post';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('sorts correctly', () => {
  let unsortedPosts = [
    {
      title: "My Little Pony is the best show ever",
      hoursAgo: 10,
      author: "3DSUM",
      votes: 90,
    },
    {
      title: "Why isn't Trump impeached yet?",
      hoursAgo: 90,
      author: "crazymunch",
      votes: 100,
    },
  ];
  let sortedPosts = [
    {
      title: "Why isn't Trump impeached yet?",
      hoursAgo: 90,
      author: "crazymunch",
      votes: 100,
    },
    {
      title: "My Little Pony is the best show ever",
      hoursAgo: 10,
      author: "3DSUM",
      votes: 90,
    },
  ];
	expect(sortPosts(unsortedPosts)).toEqual(sortedPosts);
});

test('App matches snapshot', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('correctly changes the App state when upvote is pressed', () => {
  const wrapper = mount(
    <App />
  );
  const firstPostVotes = wrapper.find('#votes').at(0);
  
  let currentUpvotesString = firstPostVotes.text().split(" ").pop();
  let currentUpvotes = parseInt(currentUpvotesString, 10);
  expect(currentUpvotes).toBe(100);

  const firstPostUpvoteButton = wrapper.find('#upvote-button').at(0);
  firstPostUpvoteButton.simulate('click');
  currentUpvotesString = firstPostVotes.text().split(" ").pop();
  currentUpvotes = parseInt(currentUpvotesString, 10);
  expect(currentUpvotes).toBe(101);
});

it('correctly changes the App state when downvote is pressed', () => {
  const wrapper = mount(
    <App />
  );
  const firstPostVotes = wrapper.find('#votes').at(0);
  
  let currentUpvotesString = firstPostVotes.text().split(" ").pop();
  let currentUpvotes = parseInt(currentUpvotesString, 10);
  expect(currentUpvotes).toBe(101);

  const firstPostDownvoteButton = wrapper.find('#downvote-button').at(0);
  firstPostDownvoteButton.simulate('click');
  currentUpvotesString = firstPostVotes.text().split(" ").pop();
  currentUpvotes = parseInt(currentUpvotesString, 10);
  expect(currentUpvotes).toBe(100);
});