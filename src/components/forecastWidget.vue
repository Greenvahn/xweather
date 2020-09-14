<template>
  <div class="level">
    <div
      class="level-item has-text-centered"
      v-for="widget in infoWeek"
      :key="widget"
    >
      <MainWidget :infoToday="widget" class="is-foreCast" />
    </div>
  </div>
</template>

<script>
import MainWidget from "./mainWidget.vue";

export default {
  name: "forecastWidget",
  components: {
    MainWidget,
  },
  props: {
    infoWeek: Array,
  },
};
</script>
