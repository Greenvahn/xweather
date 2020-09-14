<template>
  <div class="tile is-4">
    <div class="container has-text-centered">
      <p>{{ infoToday.today }}</p>
      <h1 class="title">
        {{ infoToday.temperature }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainWidget",
  props: {
    infoToday: Object,
  },
};
</script>
