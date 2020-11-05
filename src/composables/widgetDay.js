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
  date = date.replace(/-/g, "/"); // Fix for Safari browser - for some reason doesn't like the default date format from javascript.
  const setDate = new Date(date);
  const day = setDate.getDay();
  let weekday = weekdays[Number(day)]; // Full day name
  weekday = weekday.substring(0,3); // Create short name - e.g Friday --> Fri
  return weekday;
}
