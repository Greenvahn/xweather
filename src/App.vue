<template>
  <weather-page :data-API="data" />
</template>
<script>
import weatherPage from "./components/weatherPage.vue";
// import useFetch from "./composables/use-fetch.js";

export default {
  name: "App",
  components: {
    weatherPage,
  },
  data() {
    return {
      data: {
        currentWeather: null,
        foreCast: []
      },
      city: "London",
      units: "metric",
      API_KEY: "07dd487fb51c8fd64b7c189f26dcffa5"
    };
  },
  created() {
    this.getCurrentWeather();
    this.foreCast();
  },
  methods: {
    // Get current weather - today
    async getCurrentWeather(){
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.units}&APPID=${this.API_KEY}`);
      const data = await res.json();
      this.data.currentWeather = data;
      // console.log("API Data -->", this.data.currentWeather)
    },
    // Get forecast for next 4 days
    async foreCast(){
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=${this.units}&exclude=hourly,daily&APPID=${this.API_KEY}`);
      const data = await res.json();
      
      // Distribute the original list to have only 5 days
      // The endpoint gets the weather status each day at 15:00pm
      let sum = 0;
      data.list.forEach((item,index) => {
        if (sum === index) {
          console.log(index, item);
          sum +=8;
          this.data.foreCast.push(item);
        }
      })
      console.log("API Data -->", this.data.foreCast)
    }
  },
};
</script>

<style lang="scss">
@import "scss/custom";
@import "bulma";

#app {
  /* Vertically center*/
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
