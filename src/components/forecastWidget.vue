<template>
  <div v-for="widget in infoWeek" :key="widget">
    <p>{{widget.day}}</p>
    <p>{{widget.temperature}}</p>
  </div>
</template>

<script>
export default {
  name: "forecastWidget",
  props: {
    infoWeek: Array,
  },
};
</script>
