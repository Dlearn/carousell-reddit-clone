// src/components/AddPost/AddPost.js

import React, { PureComponent } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import './styles.css';

type Props = {
  createNewPost: (postTitle: string) => void,
};

type State = {
  input: string,
};

class AddPost extends PureComponent<Props, State> {
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

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (isLegalPostTitle(this.state.input)) {
      this.props.createNewPost(this.state.input);
    }

    this.setState({ input: '' });
  };

  render() {
    return (
      <div>
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

export function isLegalPostTitle(string: string) {
  const isEmptyString = string === '';
  const isWhitespace = !/\S/.test(string);
  const isLongerthan255 = string.length > 255;

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
