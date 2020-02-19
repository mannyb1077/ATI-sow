import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// Handles Icons in home Page and displays proper information (3 Menu Items )
const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <div
    className='menu-item'
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-Image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>Start</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
