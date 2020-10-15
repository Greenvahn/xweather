<template>
  <transition name="fade">
    <modalSearch
      v-show="modalOn"
      @modal-on-off="showModal()"
      @load-new-place="loadNewPlace()"
      v-model:newCity.lazy="city"
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
      statusRequest: null,
      modalOn: false,
    };
  },
  created() {
    this.generateDataWeather();
    this.generateDataButton();
  },
  mounted() {
    // const newDataButton = new geoWidget(this.city);
    // this.data.location = window.setInterval(newDataButton.getData(), 1000);
  },
  methods: {
    // FECTH API
    // ===========================================
    // Get current weather - today
    generateDataWeather() {
      const newWeather = new fetchData(this.city, this.units);
      // --> Get current weather
      newWeather.getCurrentWeather().then((data) => {
        // To be removed - console error listener
        console.log("DATA", data)
        if (data.cod === 200) {
          console.log("API STATUS: "+ data.cod +" - OK");
        }

        if (data.cod === "404") {
          console.log("API STATUS: "+ data.cod +" - Not found");
          this.statusRequest = Number(data.cod); 
          return false;
        }

        this.statusRequest = data.cod; // Get status request from API
        this.data.currentWeather = data; // Get current weather data
        this.data.timezone = data.timezone; // Get timezone
        this.data.country = data.sys.country; // Get country
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

    // MODAL - SEARCH BAR
    // ===========================================
    // --> show / hide search bar
    showModal() {
      this.modalOn ? (this.modalOn = false) : (this.modalOn = true);
    },
    loadNewPlace() {
      this.showModal();
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
