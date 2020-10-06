<template>
  <section id="searchBar" class="section">
    <!-- Content ... -->
    <form @submit.prevent="$emit('load-new-place')">
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
import { ref } from "vue";

export default {
  props: ["newCity"],
  setup() {
    const newPlace = ref("");

    function updateValue() {
      //  console.log("The value has been updated as", newCity);
      // this.$emit('new-city', newPlace.value)
    }
    return {
      newPlace,
      updateValue,
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
