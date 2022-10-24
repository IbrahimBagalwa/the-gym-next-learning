import React from 'react';
import MeetupItem from './meetupItem';
import classes from './meetupList.module.css';

export default function MeetupList(props) {
  console.log(props);
  const { meetups } = props;
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => {
        const { id, image, title, address } = meetup;
        return (
          <MeetupItem
            key={id}
            id={id}
            image={image}
            title={title}
            address={address}
          />
        );
      })}
    </ul>
  );
}
