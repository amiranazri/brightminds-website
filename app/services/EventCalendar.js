import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyC9ZkPNeFRZRXMII3V9uLSjVvswCGgtSlg";
let calendars = [
  {
    calendarId: "info@brightmindsedu.org",
  },
  {
    calendarId: "en.malaysia#holiday@group.v.calendar.google.com",
    color: "#B241D1", // Optional, specify color of calendar 2 events
  },
];

function EventCalendar() {
  return (
    <div>
      <Calendar apiKey={API_KEY} calendars={calendars} showFooter={false} />
    </div>
  );
}

export default EventCalendar;
