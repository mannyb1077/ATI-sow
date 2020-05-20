import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectRooms } from "../../redux/house/house.selector";

import RoomSummaryItem from "../../components/room-summary-item/room-summary-item.component";

import "./room-summary.styles.scss";

//Creates Room Summary Page with header for job-summary-item
const RoomSummaryPage = ({ rooms }) => (
  <div className='room-summary-page'>
    <div className='room-summary-header'>
      <div className='header-block'>
        <span>Room Name</span>
      </div>
      <div className='header-block'>
        <span>TV</span>
      </div>
      <div className='header-block'>
        <span>Projector</span>
      </div>
      <div className='header-block'>
        <span>Speakers</span>
      </div>
      <div className='header-block'>
        <span>Camera</span>
      </div>
      <div className='header-block'>
        <span>phone/data</span>
      </div>
      <div className='header-block'>
        <span>Delete</span>
      </div>
    </div>
    {rooms.map((room) => (
      <RoomSummaryItem key={room.id} room={room} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  rooms: selectRooms,
});

export default connect(mapStateToProps)(RoomSummaryPage);
