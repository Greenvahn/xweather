export default class fetchData {
  // Retrieve API_KEY
  constructor(city, units){
      this.city = city;
      this.units = units;
      this.key = process.env.VUE_APP_API_KEY;
  }

  // FECTH API
  // ===========================================
  // Get current weather - today
  getCurrentWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.units}&APPID=${this.key}`
    );
    const data = await res.json();
    // this.data.currentWeather = data;
    // console.log("API Data -->", this.data.currentWeather)
    return data;
  };
  // Get forecast for next 4 days
  getforeCast = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=${this.units}&exclude=hourly,daily&APPID=${this.key}`
    );
    const data = await res.json();

    // Distribute the original list to have only 4 days - we stop array iteration at 24 ( 4th Day)
    // The endpoint gets the weather status each day at 15:00pm
    let sum = 0;
    const foreCastOutput= [];
    data.list.forEach((item, index) => {
      if (sum === index && sum <= 24) {
        //this.data.foreCast.push(item);
        foreCastOutput.push(item)
        sum += 8;
      }
    });

    return foreCastOutput;
  }
}
