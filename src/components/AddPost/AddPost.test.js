// src/containers/App/AddPost.test.js

import AddPost, { isLegalPostTitle } from './AddPost';

it('checks legal strings correctly', () => {
  expect(isLegalPostTitle("")).toBe(false);
	expect(isLegalPostTitle("   ")).toBe(false);
  // 256 characters
  expect(isLegalPostTitle("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")).toBe(false);
  expect(isLegalPostTitle("Fine title")).toBe(true);
});