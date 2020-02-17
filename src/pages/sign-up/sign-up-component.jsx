import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-up.styles.scss";

const SignUpPage = () => (
  <div className='sign-up-page'>
    <div className='sign-up'>
      <SignUp />
    </div>
    <div className='sign-up-image'></div>
  </div>
);

export default SignUpPage;
