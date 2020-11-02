export default class fetchData {
  // Retrieve API_KEY
  constructor(city, units){
      this.city = city;
      this.units = units;
      this.key = process.env.VUE_APP_API_KEY;
  }

  // FECTH API
  // ===========================================

  // Get geolocation via IP
  // https://geolocation-db.com/documentation
  getGeolocation = async () => {
    const res = await fetch(`https://geolocation-db.com/json/`);
    const data = await res.json();
    return data;
  };

  // Get current weather - today
  getCurrentWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.units}&APPID=${this.key}`
    );
    const data = await res.json();
    return data;
  };
  
  // Get forecast for next 4 days
  getforeCast = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=${this.units}&exclude=hourly,daily&APPID=${this.key}`
    );
    const data = await res.json();

    // === Openweather API 
    // Distribute the original list to have only 4 days
    // * we start the iteration at 8 ( sum = 8 ) - we skip first day (Today / let sum = 8)
    // * we stop array iteration at 32 ( 5th Day / sum <= 32)
    // * Iteration as follows :
    // ** 0 = today / 8 = second day / 16 = third day / 24 = fourth day / 32 = fith day
    // The endpoint gets the weather status each day at 15:00pm
    let sum = 8;
    const foreCastOutput= [];
    data.list.forEach((item, index) => {
      if (sum === index && sum <= 32) {
        //this.data.foreCast.push(item);
        foreCastOutput.push(item)
        sum += 8;
      }
    });

    return foreCastOutput;
  }
}
