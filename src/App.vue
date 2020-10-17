<template>
  <transition name="fade">
    <modalSearch
      v-show="modalOn"
      @modal-on-off="showModal()"
      @load-new-place="loadNewPlace()"
      v-model:newCity.lazy="city"
      :status-API="error"
    />
  </transition>
  <weather-page
    :data-API="data"
    @click="stopTimer()"
    @modal-on-off="showModal()"
  />
</template>
<script>
import modalSearch from "./components/modal-search.vue";
import weatherPage from "./components/weatherPage.vue";
import geoWidget from "./composables/geowidgetTime.js";
import fetchData from "./composables/fetchData.js";
import getDay from "./composables/widgetDay.js";

export default {
  name: "App",
  components: {
    weatherPage,
    modalSearch,
  },
  data() {
    return {
      data: {
        currentWeather: null,
        foreCast: [],
        location: null,
        timezone: false,
        utc: false,
        country: null,
      },
      city: "London",
      units: "metric",
      modalOn: false,
      init: true,
      error: {
        isOn: false,
        code: null,
        message: null,
      },
    };
  },
  created() {
    this.generateDataWeather();
    this.generateDataButton();
  },
  methods: {
    // FECTH API
    // ===========================================
    // Get current weather - today
    generateDataWeather() {
      const newWeather = new fetchData(this.city, this.units);
      // --> Get current weather
      newWeather.getCurrentWeather().then((data) => {
         console.log("DATA", data);

        if (data.cod === 200) {
          // DATA GET
          this.data.currentWeather = data; // Get current weather data
          this.data.timezone = data.timezone; // Get timezone
          this.data.country = data.sys.country; // Get country

          // ERROR STATUS
          this.error.isOn = false; // Updates error status --> false
          this.error.code = Number(data.cod); // Adds API status code
          console.log(`%cAPI STATUS: ${data.cod} - OK`, `color:green`);

          // MODAL STATUS
          // * Show the modal-search on API status 200
          // * Blocks the modal-search on first launch
          this.init ? (this.init = false) : this.showModal();
        }

        if (data.cod === "400") {
          this.error.code = Number(data.cod); // Adds API status code
          this.error.isOn = true; // Updates error status --> true
          console.log(
            `%cAPI STATUS: ${data.cod} - City not found`,
            `color:red`
          );
        }

        // // Validates API request - updates error status - on: false/true
        // this.validateData(data.cod);
      });

      // --> Get foreCast
      newWeather.getforeCast().then((data) => {
        // Computed data
        // Generate weekdays into the main forecast data
        // * Uses getDay function ( widgetDay.js ) to convert the date given into weekdays
        // ** Sample : 2020-09-30 21:00:00 --> Wednesday
        data.forEach((item) => {
          item.weekday = getDay(item.dt_txt);
        });
        // Define final data.Forecast
        this.data.foreCast = data;
        // console.log("FORECAST", data);
      });
    },

    // GET TIME-LOCATION
    // ===========================================
    generateDataButton() {
      // Generate initial Data button
      const newDataButton = new geoWidget(this.city, this.data.timezone);
      this.data.location = newDataButton.getData();
      this.data.utc = newDataButton.timezoneToHours(this.data.timezone)._UTC;

      // Init timer update
      this.updateTime();
    },

    // --> Refresh time
    updateTime() {
      setInterval(() => {
        const newDataButton = new geoWidget(this.city, this.data.timezone);
        this.data.location.time = newDataButton.getTime();
        this.data.utc = newDataButton.timezoneToHours(this.data.timezone)._UTC;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.data.location.time);
    },

    // MODAL - SEARCH BAR --> show/hide
    showModal() {
      this.modalOn ? (this.modalOn = false) : (this.modalOn = true);
    },

    // load new place --> emit from modal-search.vue
    loadNewPlace() {
      this.generateDataWeather();
      this.generateDataButton(); // Loads new place data in UTC
    },
  },
};
</script>

<style lang="scss">
@import "scss/custom";
@import "bulma";
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.fade-enter-active {
  animation: fade-in 0.3s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
