import React from 'react';
import classes from './meetupDetail.module.css';
export default function MeetUpDetail({
  id,
  image,
  title,
  address,
  description,
}) {
  return (
    <div className={classes.detail}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <address>{address}</address>
      <p>{description}</p>
    </div>
  );
}
