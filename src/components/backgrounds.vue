<template>
  <div class="bg-wrapper" :style="`background: url(${compIcon()}) ; background-size:cover`">
    <!-- <img :src="compIcon()" /> -->
  </div>
</template>

<script>
// import ref from "vue";
export default {
  name: "backgrounds",
  props: {
    dataAPI: Object,
  },
  setup(props) {

    const compIcon = () => {
        console.log("props.dataAPI.currentWeather", props.dataAPI.currentWeather.weather[0].icon)
      let str = props.dataAPI.currentWeather.weather[0].icon;
      
      if (props.dataAPI.currentWeather.weather[0].icon) {
        str = str.replace("n", "d");
      }

    // Check if the str is valid - avoids webpack error module not find....
      if (str) { return require(`../assets/backgrounds/open_sky.jpg`)}
      
    };
    return {
      compIcon,
    };

  },
};
</script>

<style scoped lang="scss">
/* Backgrounds */
.bg-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
