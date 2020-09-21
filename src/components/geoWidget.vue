<template>
  <button class="button is-medium">
      <p class="is-date">{{ infoPlace.date }}</p>
      <h2 class="is-title">{{ infoPlace.place }}</h2>
      <p class="is-time">{{ infoPlace.time }}</p>
  </button>
</template>

<script>
export default {
  name: "geoWidget",
  props: {
    infoPlace: Object,
  },
};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  height: 100%;
  max-height: 100px;
  min-width: 200px;
  margin-right: 15px;
  p,
  h2 {
    text-align: left;
  }
  .is-date {
    font-size: 14px;
  }
  .is-title {
    text-transform: uppercase;
  }
  .is-time {
    font-size: 16px;
    text-transform: uppercase;
  }
}
</style>
