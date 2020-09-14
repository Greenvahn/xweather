<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile is-parent">
        <logoWidget />
        <MainWidget :infoToday="{ today: 'Today', temperature: 25 }" />
      </div>
    </div>
    <div class="tile is-parent is-vertical is-4">
      <div class="tile is-child">
        <forecastWidget
          :infoWeek="[
            { day: 'Fri', temperature: 26 },
            { day: 'Sat', temperature: 22 },
            { day: 'Sun', temperature: 24 },
          ]"
        />
      </div>
      <div class="tile is-child">
        <geoWidget
          :infoPlace="{ date: '14/09/2020', place: 'London', hour: '08:21PM' }"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MainWidget from "./mainWidget.vue";
import forecastWidget from "./forecastWidget.vue";
import geoWidget from "./geoWidget.vue";
import logoWidget from "./logoWidget.vue";

export default {
  name: "weatherPage",
  components: {
    MainWidget,
    forecastWidget,
    geoWidget,
    logoWidget,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
