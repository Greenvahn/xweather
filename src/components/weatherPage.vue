<template>
  <div id="mainSection" class="section">
    <div class="container ">
      <div class="columns">
        <!-- Logo + Todays weather -->
        <div id="first-col" class="column is-three-fifths-tablet is-two-thirds-desktop is-three-quarters-widescreen is-four-fifths-fullhd todays-panel">
          <div class="columns">
            <div class="logo-wrap column is-half-tablet is-two-thirds-desktop is-three-quarters-widescreen is-four-fifths-fullhd">
              <logoWidget />
            </div>
            <div class="mainWidget-wrap column">
              <MainWidget :infoToday="{ day: 'Today', temperature: `${Math.round(dataAPI.main.temp)}°`, description: dataAPI.weather[0].main}" />
            </div>
          </div>
        </div>
        <!-- // Logo + Todays weather -->

        <!-- Forecast + button -->
        <div id="second-col" class="column forecast-panel">
          <div class="columns">
            <div class="column forecast--info">
              <forecastWidget
                :infoWeek="[
                  { day: 'Thu', temperature: '26°' },
                  { day: 'Fri', temperature: '22°' },
                  { day: 'Sat', temperature: '24°' },
                  { day: 'Sun', temperature: '26°' },
                ]"
              />
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
  props : {
    dataAPI: Object
  },
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
