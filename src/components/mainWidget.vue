<template>
  <div class="container has-text-centered">
    <p class="subtitle">{{ infoToday.day }}</p>
    <img :src="require(`../assets/svg-icons/${infoToday.icon}.svg`)" />
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
  }
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
