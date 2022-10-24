import React from 'react';
import NewMeetupForm from '../../component/meetup/NewMeetupForm';

export default function NewMeetup() {
  function addMeetupHandler(dataEntries) {
    console.log(dataEntries);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
