<template>
  <div class="container">
    <p>{{infoToday.today}}</p>
    <h1 class="title">
      {{infoToday.temperature}}
    </h1>
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
