<template>
  <section id="searchBar" class="section">
    <!-- Content ... -->
    <form @submit.prevent="$emit('data-get')">
      <label for="search" class="hidden-visually">Search: </label>
      <div class="field has-addons">
        <div class="control">
          <input
            class="input is-large"
            type="text"
            name="search"
            placeholder="Input your city"
            :value="newCity"
            @input="(event) => $emit('update:newCity', event.target.value)"
          />
        </div>
        <div class="control">
          <button class="button is-normal">
            <img :src="require('../assets/svg-icons/search-bar.svg')" />
          </button>
        </div>
      </div>
      <div class="error-wrapper">
        <transition name="fadeVR">
          <div v-if="statusAPI.isOn" class="error-status is-primary">
            <h2>{{ statusAPI.message }}</h2>
            <div class="help notification is-warning is-light">
              <h3>Search engine is very flexible. How it works:</h3>
              <ul>
                <li>
                  To make it more precise put the city's name, comma, 2-letter
                  country code (ISO3166). You will get all proper cities in
                  chosen country. The order is important - the first is city
                  name then comma then country. Example - London, GB or New
                  York, US.
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </form>
    <button
      class="back-button"
      @click="$emit('modal-on-off')"
      aria-label="close"
    >
      <img :src="require('../assets/svg-icons/chevron-back.svg')" />
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
    .field {
      width: 100%;
      margin-top: 15%; // Re adjust seachbar position into the center
      &.has-addons {
        justify-content: center;
        display: flex;
        flex-direction: row;
      }
    }
    .control {
      input {
        border: 2px solid #5a5e90;
        &:focus {
          box-shadow: none !important;
          background: #e8f0fe;
          // border: 2px solid #5a5e90;
        }
      }
      button {
        height: 60px;
        padding: 0px 10px;
        border: 1px solid #5a5e90;
        background-color: #5a5e90;
        img {
          width: 35px;
          height: 35px;
          svg {
            fill: #5a5e90;
            stroke: white;
          }
        }
      }

      &:first-child {
        width: 60%;
      }
    }

    .error-wrapper {
      display: flex;
      justify-content: center;
      height: 200px;
      .error-status {
        width: 65%;
        margin-top: 30px;
        h2 {
          font-size: 1.2em;
          width: 100%;
          margin-left: 20px;
        }
        h3 {
          font-weight: bold;
          margin-bottom: 10px;
        }
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
          width: 100%;
        }
      }
    }
  }
  .back-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: -10% auto 0 auto;
    width: 85px;
    height: 40px;
    border-radius: 5px;
    background: #5a5e90;
    color: white;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      background: #404366;
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
}
</style>
