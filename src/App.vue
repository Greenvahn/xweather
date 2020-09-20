<template>
  <weather-page :data-API="data" />
</template>
<script>
import weatherPage from "./components/weatherPage.vue";

export default {
  name: "App",
  components: {
    weatherPage,
  },
  data() {
    return {
      data: {},
      city: "London",
      units: "metric",
      API_KEY: "2ec37e86c3f6645fc6fa6cbd3f2eb4df",
      type: "onecall"
    };
  },
  created() {
    this.getCurrentWeather(this.city, this.units, this.API_KEY, this.type);
  },
  methods: {
    async getCurrentWeather(city, units, key, type) {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/${type}?q=${city}&units=${units}&APPID=${key}`
      );
      const data = await res.json();
      this.data = data;
      console.log("DATA API -->", data);
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
