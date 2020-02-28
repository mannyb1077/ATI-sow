import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import SubmitButton from "../submit-button/submit-button.component";

import { auth } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    if (!email.match("@ati-america.com")) {
      alert("Please use your ATI email");
      return;
    }

    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      return error;
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  // Displays Sign In Form
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
            <div className='create-account'>
              <span> First time login? </span>
              <Link className='create-account-link' to='signup'>
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
