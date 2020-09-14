<template>
  <div id="weather-page" class="container is-fluid">
    <div class="container wrapper">
      <div class="main-panel">
          <div class="logo-wrap"><logoWidget /></div>
          <div class="mainWidget-wrap">
            <MainWidget :infoToday="{ day: 'Today', temperature: '25°' }" />
          </div>
      </div>
      <div class="forecast-panel">
        <div class="forecast--info">
          <forecastWidget
            :infoWeek="[
              { day: 'Thu', temperature: '26°' },
              { day: 'Fri', temperature: '22°' },
              { day: 'Sat', temperature: '24°' },
              { day: 'Sun', temperature: '26°' },
            ]"
          />
        </div>
        <div class="forecast--place">
          <geoWidget
            :infoPlace="{
              date: '14/09/2020',
              place: 'London',
              time: '08:21PM',
            }"
          />
        </div>
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

<style scoped lang="scss">
#weather-page {
  position: absolute;
  top: 200px;
  max-width: 1824px;
}
</style>
