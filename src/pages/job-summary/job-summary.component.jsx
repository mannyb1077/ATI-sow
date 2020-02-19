import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import JobSummaryItem from "../../components/job-summary-item/job-summary-item.component";

import "./job-summary.styles.scss";

//Creates Job Summary Page with header for job-summary-item
const JobSummaryPage = ({ cartItems }) => (
  <div className='job-summary-page'>
    <div className='job-summary-header'>
      <div className='header-block'>
        <span>Room Name</span>
      </div>
      <div className='header-block'>
        <span>Image</span>
      </div>
      <div className='header-block'>
        <span>Item</span>
      </div>
      <div className='header-block'>
        <span>Type</span>
      </div>
      <div className='header-block'>
        <span>Size</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Delete</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <JobSummaryItem key={cartItem.id} cartItem={cartItem} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(JobSummaryPage);
