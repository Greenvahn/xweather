<template>
  <weather-page />
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


#app {
  /* Vertically center*/
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
