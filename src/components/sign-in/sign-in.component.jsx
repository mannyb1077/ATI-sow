import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import SubmitButton from "../submit-button/submit-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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
            <SubmitButton type='submit'>Sign In</SubmitButton>
            <SubmitButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </SubmitButton>
          </div>

          <div className='create-account'>
            <span>First time login? </span>
            <Link className='create-account-link' to='signup'>
              Create Account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
