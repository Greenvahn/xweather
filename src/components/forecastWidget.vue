<template>
  <div class="level is-mobile">
    <div
      class="level-item has-text-centered"
      v-for="widget in infoWeek"
      :key="widget.dt"
    >
      <MainWidget
        :infoToday="{
          day: widget.weekday,
          temperature:
            (widget &&
              widget.main &&
              widget.main.temp) ||
            'Loading...',
          icon:  
            (widget &&
              widget.weather &&
              widget.weather[0].icon) ||
            'Loading...',
          isForecast: true
        }"
        class="is-foreCast"
      />
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
  }
};
</script>
