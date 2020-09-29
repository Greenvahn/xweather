export default function(date) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const setDate = new Date(date);
  const day = setDate.getDay();
  let weekday = weekdays[day]; // Full day name
  weekday = weekday.substring(0,3); // Create short name - e.g Friday --> Fri
  return weekday;
}
