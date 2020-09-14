<template>
  <div id="app" class="container is-fluid">
    <weather-page />
  </div>
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
