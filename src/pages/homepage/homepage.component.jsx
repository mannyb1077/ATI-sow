import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

// Displays icons (AV, Shades and Security) in home Page by grabing info from components/directory/directory.component
const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
);
export default HomePage;
