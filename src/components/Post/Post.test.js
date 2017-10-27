// src/containers/App/Post.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

it('renders without crashing', () => {
  shallow(<Post />);
});