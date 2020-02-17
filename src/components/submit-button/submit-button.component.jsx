import React from "react";

import "./submit-button.styles.scss";

const SubmitButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""}  ${
      isGoogleSignIn ? "google-sign-in" : ""
    } submit-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default SubmitButton;
