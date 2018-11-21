// src/components/AddPost/AddPost.js

import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import 'react-toastify/dist/ReactToastify.min.css';
import './styles.css';

class AddPost extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
    };
  }

  getValidationState() {
    const length = this.state.input.length;
    if (length > 255) return 'error';
    if (length > 0) return 'success';
    return null;
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (isLegalPostTitle(this.state.input)) {
      this.props.createNewPost(this.state.input);
      this.newPostToast();
    }

    this.setState({ input: '' });
  };

  newPostToast = () => {
    toast('New post created!');
  };

  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          type="default"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
        />
        <form className="jumbotron myJumbotron" onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
            bsSize="large"
          >
            <ControlLabel className="h2">+ Create New Post</ControlLabel>
            <FormControl
              type="text"
              value={this.state.input}
              placeholder="Write the title of your new post."
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export function isLegalPostTitle(s) {
  const isEmptyString = s === '';
  const isWhitespace = !/\S/.test(s);
  const isLongerthan255 = s.length > 255;

  if (isEmptyString || isWhitespace) {
    alert('Please input non empty title!');
    return false;
  }
  if (isLongerthan255) {
    alert('Title has max length 255 characters!');
    return false;
  }

  return true;
}

export default AddPost;
