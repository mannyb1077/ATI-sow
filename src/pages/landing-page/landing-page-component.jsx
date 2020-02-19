import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/submit-button/submit-button.component";

import "../landing-page/landing-page-styles.scss";

// Displays Landing Page with Sign In and Sign Up buttons
const LandingPage = () => (
  <div className='landing-page'>
    {
      <div className='landing-page-buttons'>
        <div className='buttons'>
          <Link className='options' to='/signin'>
            <SubmitButton type='submit'>Sign In</SubmitButton>
          </Link>
          <Link className='options' to='/signup'>
            <SubmitButton type='submit'>Sign Up</SubmitButton>
          </Link>
        </div>
      </div>
    }
  </div>
);
export default LandingPage;
