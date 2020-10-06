<template>
  <div id="mainSection" class="section">
    <div class="container ">
      <div class="columns">
        <!-- Logo + Todays weather -->
        <div
          id="first-col"
          class="column is-three-fifths-tablet is-two-thirds-desktop is-three-quarters-widescreen is-four-fifths-fullhd todays-panel"
        >
          <div class="columns">
            <div
              class="logo-wrap column is-half-tablet is-two-thirds-desktop is-three-quarters-widescreen is-four-fifths-fullhd"
            >
              <logoWidget />
            </div>
            <div class="mainWidget-wrap column">
              <MainWidget
                :infoToday="{
                  day: 'Today',
                  temperature:
                    (dataAPI.currentWeather &&
                      dataAPI.currentWeather.main &&
                      dataAPI.currentWeather.main.temp) ||
                    'Loading...',
                  description:
                    (dataAPI.currentWeather &&
                      dataAPI.currentWeather.weather &&
                      dataAPI.currentWeather.weather[0].main) ||
                    'Loading...',
                }"
              />
            </div>
          </div>
        </div>
        <!-- // Logo + Todays weather -->

        <!-- Forecast + button -->
        <div id="second-col" class="column forecast-panel">
          <div class="columns">
            <div class="column forecast--info">
              <forecastWidget :infoWeek="dataAPI.foreCast" />
              <geoWidget
                :infoPlace="{
                  date: dataAPI.location.date,
                  place: dataAPI.location.place,
                  time: dataAPI.location.time,
                }"
                @click="$emit('modal-on-off')"
              />
            </div>
          </div>
        </div>
        <!-- // Forecast + button -->
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
  props: {
    dataAPI: Object,
  },
  components: {
    MainWidget,
    forecastWidget,
    geoWidget,
    logoWidget,
  },
  data() {
    return {
      modalOn: false,
    };
  },
  methods: {
    showModal() {
      this.modalOn ? (this.modalOn = false) : (this.modalOn = true);
    },
  },
};
</script>
