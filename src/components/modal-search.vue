<template>
  <section id="searchBar" class="section">
    <!-- Content ... -->
    <form @submit.prevent="$emit('data-get')">
      <label for="search" class="hidden-visually">Search: </label>
      <input
        class="input is-large"
        type="text"
        name="search"
        placeholder="Input your city"
        :value="newCity"
        @input="(event) => $emit('update:newCity', event.target.value)"
      />
      <button v-show="newCity" class="button is-normal">
        Search
      </button>
    </form>
    <div v-if="statusAPI.isOn" class="notification is-danger">
      <button class="delete" @click="clearError"></button>
      <h2>{{ statusAPI.message }}</h2>
      <h3>Search engine is very flexible. How it works:</h3>
      <ul>
        <li>
          To make it more precise put the city's name, comma, 2-letter country
          code (ISO3166). You will get all proper cities in chosen country. The
          order is important - the first is city name then comma then country.
          Example - London, GB or New York, US.
        </li>
      </ul>
    </div>
    <button
      @click="$emit('modal-on-off')"
      aria-label="close"
      v-if="!statusAPI.isOn"
    >
      BACK
    </button>
  </section>
</template>

<script>
// import { reactive, watch } from "vue";

export default {
  props: {
    newCity: String,
    statusAPI: Object,
  },

  // Composition API - vue 3
  // ======================================
  // The second argument passed to the setup function is the context.
  // The context is a normal JavaScript object that exposes three component properties:
  // attrs, slots, emit
  // it is not reactive, this means you can safely use ES6 destructuring on context.
  // context = { attrs, slots, emit }
  setup() {
    // let error = reactive();

    // watch((props.statusAPI.isOn), () => {
    //   props.statusAPI.isOn ? error = true
    // });
    //props.statusAPI.isOn ? error = true : error = false

    // console.log("props.statusAPI.isOn", props.statusAPI.isOn)
    // console.log("=========", error)
    const clearError = () => {
      console.log("--- clear");
      // error = false;
    };

    return {
      clearError,
    };
  },
};
</script>

<style lang="scss">
#searchBar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    input {
      width: 60%;
    }
  }
}
</style>
