<template>
  <weather-page :data-API="data" />
</template>
<script>
import weatherPage from "./components/weatherPage.vue";
import geoWidget from "./composables/geowidgetTime.js";

export default {
  name: "App",
  components: {
    weatherPage,
  },
  data() {
    return {
      data: {
        currentWeather: null,
        foreCast: [],
        location: null
      },
      city: "London",
      units: "metric",
      API_KEY: "07dd487fb51c8fd64b7c189f26dcffa5"
    };
  },
  created() {
    this.getCurrentWeather();
    this.foreCast();
    this.generateDataButton();
  },
  methods: {
    // FECTH API
    // ===========================================
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

      // Distribute the original list to have only 4 days - we stop array iteration at 24 ( 4th Day)
      // The endpoint gets the weather status each day at 15:00pm
      let sum = 0;
      data.list.forEach((item,index) => {
        if (sum === index && sum <= 24) {
          this.data.foreCast.push(item);
          sum +=8;
        }
      })
      // console.log("API Data -->", this.data.foreCast)
    },

    generateDataButton () {
      const newDataButton = new geoWidget(this.city);
      this.data.location = newDataButton.getData();
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
