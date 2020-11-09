<template>
  <button class="button is-small">
    <p>Information</p>
    <span class="icon">
      <img :src="require('../assets/svg-icons/geowidget-global.svg')" />
    </span>
  </button>
</template>

<script>
export default {
  name: "linksWidget",
  props: {
  }
};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  border: 2px solid rgba($color: #5a5e90, $alpha: 0.3);
  color: #5a5e90;
  transition: all 0.6s;

  height: 100%;
  max-height: 100px;
  min-width: 200px;
  margin-right: 15px;
  p,
  h2 {
    text-align: left;
  }

  .icon {
    width: 25%;
    transition: all 0.6s;
    opacity: 0.3;
    img {
      width: 50px;
      height: 50px;
    }
  }

  &:hover {
    border: 2px solid #5a5e90;
    background: #e8f0fe;

    .icon {
      opacity: 1;
    }
  }
}
</style>
