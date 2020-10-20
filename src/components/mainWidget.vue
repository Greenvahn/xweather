<template>
  <div class="container has-text-centered">
    <p class="subtitle">{{ infoToday.day }}</p>
    <img :src="compIcon()" />
    <p class="title">{{ Math.round(infoToday.temperature) }}°</p>
    <p v-if="infoToday.description" class="description">
      {{ infoToday.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "mainWidget",
  props: {
    infoToday: Object,
  },
  setup(props) {
    // Hide nigth icons on forecast
    // Keep icons for 'today' weather
    const compIcon = () => {
      let str = props.infoToday.icon;
      if (props.infoToday.isForecast) {
        str = str.replace("n", "d");
      }

    // Check if the str is valid - avoids webpack error module not find....
      if (str) { return require(`../assets/svg-icons/${str}.svg`)}
      
    };

    return {
      compIcon,
    };
  },
};
</script>

<style scoped lang="scss">
img {
  max-width: 175px;
}
p {
  &.subtitle {
    text-transform: uppercase;
    font-size: 32px;
    margin-bottom: 0px;
  }
  &.title {
    font-size: 100px;
    margin-top: -30px;
    margin-bottom: 0px;
  }
  &.description {
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 100;
  }
}
</style>
