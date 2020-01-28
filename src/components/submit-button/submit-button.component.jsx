import React from "react";

import "./submit-button.styles.scss";

const SubmitButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} submit-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default SubmitButton;
