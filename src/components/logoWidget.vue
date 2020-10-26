<template>
  <div class="container">
    <img src="../assets/xweather-logo.png" />
  </div>
</template>
<script>
export default {
  name: "logo",
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    max-width: 150px;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      max-width: 100px;
    }
  }
}
</style>
