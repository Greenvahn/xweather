export default class GeoWidget {
  constructor(location, timezone) {
    this.location = location; // Input --> from the App (city)
    this.timezone = timezone; // Input --> from the API
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
  }
  getDate() {
    const date = this.date;
    let currentMonth = date.getMonth() + 1;
    currentMonth < 10 ? (currentMonth = "0" + currentMonth) : currentMonth; // month format 00
    const fullDate = `${date.getUTCDate()}/${currentMonth}/${date.getFullYear()}`;
    return fullDate;
  }
  timezoneToHours(timezone) {
    let _rawHours = Math.round(timezone / 3600);
    let _formattedHours;

    // Check _rawHours is negative or positive number
    // * Creates sign variable "-" / "+"
    // * Converts _formattedHours into positive number to use in _UTC
    let _sign = Math.sign(_rawHours);
    _sign === 1 || _sign === 0
      ? ((_sign = "+"), (_formattedHours = _rawHours)) // positive number
      : ((_sign = "-"), (_formattedHours = _rawHours * -1)); // negative number --> positive number

    let _UTC = `UTC${_sign}0${_formattedHours}:00`;
    return { _rawHours, _UTC };
  }
  getTime() {
    // Gets the base UTC ( Universal time)
    let hours = this.date.getUTCHours();
    let minutes = this.date.getUTCMinutes();

    // * Applies offset hours on top of the base UTC
    // ** If timezone => UTC --> location time
    // *** offset => (timezone miliseconds / 3600) => +hours
    // ** If !timezone => UTC --> user's time
    this.timezone
      ? (hours = hours + this.timezoneToHours(this.timezone)._rawHours)
      : (hours = this.hours);
    minutes = this.minutes;

    // Time --> PM or AM
    // const ampm= hours >= 24 || hours <= 12 ?  "am" : "pm";

    const ampm = hours >= 12 ? "pm" : "am"
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const computedTime = hours + ":" + minutes + " " + ampm;

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
