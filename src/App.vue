<template>
  <div id="app">
    <MainWidget :infoToday="{ today: 'Today', temperature: 25 }" />
    <forecastWidget
      :infoWeek="[
        { day: 'Fri', temperature: 26 },
        { day: 'Sat', temperature: 22 },
        { day: 'Sun', temperature: 24 },
      ]"
    />
    <geoWidget
      :infoPlace="{ date: '14/09/2020', place: 'London', hour: '08:21PM' }"
    />
  </div>
</template>

<script>
import MainWidget from "./components/mainWidget.vue";
import forecastWidget from "./components/forecastWidget.vue";
import geoWidget from "./components/geoWidget.vue";

export default {
  name: "App",
  components: {
    MainWidget,
    forecastWidget,
    geoWidget,
  },
  data() {
    return {
      Othermessage: "This page uses bulma",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "scss/custom";
@import "bulma";
</style>
