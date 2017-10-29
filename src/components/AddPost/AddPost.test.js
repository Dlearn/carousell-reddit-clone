// src/containers/App/AddPost.test.js

import React from 'react';
import { mount } from 'enzyme';
import AddPost, { isLegalPostTitle } from './AddPost';

it('checks legal strings correctly', () => {
  expect(isLegalPostTitle("")).toBe(false);
	expect(isLegalPostTitle("   ")).toBe(false);
  // 256 characters
  expect(isLegalPostTitle("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")).toBe(false);
  expect(isLegalPostTitle("Fine title")).toBe(true);
});

describe('AddPost properly rendered', () => {
  const wrapper = mount(
    <AddPost />
  );

  const controlLabel = wrapper.find('ControlLabel');
  const formControl = wrapper.find('FormControl');
  
  it('renders the controlLabel correctly', () => {
    expect(controlLabel.text()).toBe("Create New Post");
  });

  it('renders the formControl text correctly', () => {
    expect(formControl.text()).toBe("");
  });
});

it('submits the form correctly', () => {
  const handleSubmit = jest.fn();
  const wrapper = mount(
    <AddPost />
  );

  const form = wrapper.find('form');
  form.onSubmit = handleSubmit();
  const formControl = wrapper.find('FormControl');
  
  form.simulate('submit');
  expect(handleSubmit).toHaveBeenCalled();
});