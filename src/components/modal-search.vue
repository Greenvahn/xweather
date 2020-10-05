<template>
  <section id="searchBar" class="section">
    <!-- Content ... -->
    <div class="field">
      <div class="control">
        <input class="input is-large" type="text" placeholder="Input the city name" />
      </div>
    </div>
    <button
      aria-label="close"
      @click="$emit('modal-on-off')"
    >BACK</button>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    modalData: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
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
}
</style>
