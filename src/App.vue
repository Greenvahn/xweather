<template>
  <transition name="fade">
    <modalSearch
      v-show="modalOn"
      @modal-on-off="showModal()"
      @load-new-place="loadNewPlace()"
      v-model:newCity="city"
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
        timer: "",
      },
      city: "London",
      units: "metric",
      modalOn: false,
    };
  },
  created() {
    this.genearateDataWeather();
    this.generateDataButton();
    //this.location = this.timer;
  },
  mounted() {
    // const newDataButton = new geoWidget(this.city);
    // this.data.location = window.setInterval(newDataButton.getData(), 1000);
  },
  methods: {
    // FECTH API
    // ===========================================
    // Get current weather - today
    genearateDataWeather() {
      const newWeather = new fetchData(this.city, this.units);
      // --> Get current weather
      newWeather.getCurrentWeather().then((data) => {
        this.data.currentWeather = data;
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
        console.log("FORECAST", data);
      });
    },

    // GET TIME-LOCATION
    // ===========================================
    generateDataButton() {
      // Generate initial Data button
      const newDataButton = new geoWidget(this.city);
      this.data.location = newDataButton.getData();

      // Initi timer update
      this.updateTime();
    },

    // --> Refresh time
    updateTime() {
      setInterval(() => {
        const newDataButton = new geoWidget(this.city);
        this.data.location.time = newDataButton.getTime();
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
      this.genearateDataWeather();
      this.generateDataButton();
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
