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
      API_KEY: "07dd487fb51c8fd64b7c189f26dcffa5"
    };
  },
  created() {
    this.getName();
  },
  methods: {
    async getName() {
        const res = await fetch(
         // `api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.keyAPI}`
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units${this.units}&APPID=${this.API_KEY}`
        );
        const data = await res.json();
        this.data = data;
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
