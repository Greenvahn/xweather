<template>
  <section id="searchBar" class="section">
    <!-- Content ... -->
    <form @submit.prevent="emitValue()">
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
    <button @click="$emit('modal-on-off')" aria-label="close">BACK</button>
  </section>
</template>

<script>
// import { reactive } from "vue";

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
  setup(props, { emit }) {
    // let message = reactive("");

    const emitValue = () => {
      emit("load-new-place")
    };

    return {
      emitValue,
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
