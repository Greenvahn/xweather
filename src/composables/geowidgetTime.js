export default class GeoWidget {
  constructor(location, timezone) {
    this.location = location; // Input --> from the App (city)
    this.timezone = timezone; // Input --> from the API
    this.date = new Date(); // Local date
    this.hours = this.date.getHours(); // local hours
    this.minutes = this.date.getMinutes(); // Local minutes
    this.computedTimeParams = null; // Generated from timezones values => {h: 00:00 , m: 00}
  }
  getDate() {
    const date = this.date;
    let currentMonth = date.getMonth() + 1;
    currentMonth < 10 ? (currentMonth = "0" + currentMonth) : currentMonth; // month format 00

    let fullDate = `${date.getUTCDate()}/${currentMonth}/${date.getFullYear()}`;

    // Is DAY AHEAD ? fullDate adjustment
    // =======================================================================
    // Updates the UTC date IF the computed hour is bigger than 23 => next day
    // * _compHours > 23 ? _currentUTCDate++
    if (this.computedTimeParams) {
      let _compHours = this.computedTimeParams.h;
      let _currentUTCDate = date.getUTCDate();
      _compHours > 23
        ? (_currentUTCDate++)
        : (_compHours, _currentUTCDate);

      fullDate = `${_currentUTCDate}/${currentMonth}/${date.getFullYear()}`;
    }

    return fullDate;
  }
  timezoneToHours(timezone) {
    let _rawHours = Math.round(timezone / 3600); // Timezone value comes in mileseconds => value/3600 => hours
    let _formattedHours;

    // Check _rawHours is negative or positive number
    // * Creates sign variable "-" / "+"
    // * Converts _formattedHours into positive number to use in _UTC
    let _sign = Math.sign(_rawHours);
    _sign === 1 || _sign === 0
      ? ((_sign = "+"), (_formattedHours = _rawHours)) // positive number
      : ((_sign = "-"), (_formattedHours = _rawHours * -1)); // negative number --> positive number

    // If formatted hours < 10 => '0'+ formatted hours
    _formattedHours < 10
      ? (_formattedHours = `0${_formattedHours}`)
      : _formattedHours;

    let _UTC = `UTC${_sign}${_formattedHours}:00`;
    return { _rawHours, _UTC };
  }
  getTime() {
    // Gets the base UTC ( Universal time)
    let hours = this.date.getUTCHours(); // Get hours in UTC
    let minutes = this.date.getUTCMinutes(); // Get minutes in UTC

    // Applies offset hours on top of the base UTC
    // * UTC hours = UTChours + timezone_rawHours
    this.timezone
      ? (hours = hours + this.timezoneToHours(this.timezone)._rawHours) // Local hours adjusted to timezone
      : (hours = this.hours); // Just the local hours - no timezone
    minutes = this.minutes; // Just the local minutes

    minutes = minutes < 10 ? "0" + minutes : minutes; // Adjusted minutes to 00:00 format
    this.computedTimeParams = { h: hours, m: minutes }; // Computed time parameters used to calculate the date => h > 23 => day++

    hours > 23 ? (hours = hours - 24) : hours; // Adjust the hours to 24h format => e.g 30:00 - 24:00 => 06:00 AM
    const computedTime = `${hours}:${minutes}`;
    return computedTime;
  }
  getData() {
    const widgetObj = {};
    widgetObj.place = this.location;
    widgetObj.time = this.getTime();
    widgetObj.date = this.getDate();
    return widgetObj;
  }
}
