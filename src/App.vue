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
  top:50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
