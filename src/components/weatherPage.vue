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
              class="logo-wrap column is-half-tablet is-two-thirds-desktop is-three-quarters-widescreen is-three-fifths-fullhd"
            >
              <logoWidget />
              <div class="links-wrap">
                <links />
                <button
                  class="button is-information"
                  @click="$emit('modal-info')"
                >
                  <span class="icon">
                    <img
                      :src="require('../assets/svg-icons/information-icon.svg')"
                    />
                  </span>
                </button>
              </div>
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
                  icon:
                    dataAPI.currentWeather &&
                    dataAPI.currentWeather.weather &&
                    dataAPI.currentWeather.weather[0].icon,
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
                  timezone: dataAPI.timezone,
                  country: dataAPI.country,
                  utc: dataAPI.utc,
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
import links from "./linksWidget.vue";

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
    links,
  },
  data() {
    return {
      modalOn: false,
      // modalInfo: false,
    };
  },
  methods: {
    showModal() {
      this.modalOn ? (this.modalOn = false) : (this.modalOn = true);
    },
    // showInfo() {
    //   this.modaInfo ? (this.modaInfo = false) : (this.modaInfo = true);
    // },
  },
};
</script>
