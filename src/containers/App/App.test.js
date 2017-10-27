// src/containers/App/App.test.js

import React from 'react';
import ReactDOM from 'react-dom';
import App, { sortPosts } from './App';

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