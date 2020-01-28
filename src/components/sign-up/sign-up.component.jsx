import React from "react";

import FormInput from "../form-input/form-input.component";
import SubmitButton from "../submit-button/submit-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ username: "", email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-up'>
        <h2>Sign Up to ATI Scope of Work</h2>
        <span>Enter your information below</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            username='username'
            name='username'
            type='username'
            handleChange={this.handleChange}
            value={this.state.email}
            label='username'
            required
          />
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />
          <div className='buttons'>
            <SubmitButton type='submit'>Create Account</SubmitButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
