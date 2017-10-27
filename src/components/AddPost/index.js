// src/components/AddPost/index.js

import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class AddPost extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };
  }

  getValidationState() {
    const length = this.state.input.length;
    if (length > 255) return 'error';
    else if (length > 0) return 'success';
    return null;
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (isLegalPostTitle(this.state.input)) { 
      this.props.createNewPost(this.state.input);
    }

    this.setState({ input: "" });
  } 

  render() {
    return (
      <form 
        className="jumbotron container"
        onSubmit={this.handleSubmit}
      >
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
          bsSize="large"
        >
          <ControlLabel>Create New Post</ControlLabel>
          <FormControl 
            type="text"
            value={this.state.input}
            placeholder="Write the title of your new post."
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

function isLegalPostTitle(s) {
  let isEmptyString = s === "";
  let isWhitespace = !/\S/.test(s);
  let isLongerthan255 = s.length > 255;

  if (isEmptyString || isWhitespace) {
    alert("Please input non empty title!");
    return false;
  }

  else if (isLongerthan255) {
    alert("Title has max length 255 characters!");
    return false;
  }

  return true;
}

export default AddPost;