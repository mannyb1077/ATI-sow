import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-up.styles.scss";

// Displays SignUp Page by grabing info from component/signup/signup.component and adding image
const SignUpPage = () => (
  <div className='sign-up-page'>
    <div className='sign-up'>
      <SignUp />
    </div>
    <div className='sign-up-image'></div>
  </div>
);

export default SignUpPage;
