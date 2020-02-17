import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./log-in.styles.scss";

const LogInPage = () => (
  <div className='log-in-page'>
    <div className='log-in'>
      <SignIn />
    </div>
    <div className='log-in-image'></div>
  </div>
);

export default LogInPage;
