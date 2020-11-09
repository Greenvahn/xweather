<template>
  <section id="information" class="section">
    <button
      class="back-button"
      @click="$emit('modal-info')"
      aria-label="close"
    >
      <img :src="require('../assets/svg-icons/chevron-back.svg')" />
      BACK
    </button>
  </section>
</template>

<script>
export default {
  props: {
  }
};
</script>

<style lang="scss">
#information {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);

  .back-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: -65px auto 0 auto;
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
