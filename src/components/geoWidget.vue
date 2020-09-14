<template>
  <div class="container">
    <p>{{infoPlace.date}}</p>
    <p>{{infoPlace.place}}</p>
    <p>{{infoPlace.hour}}</p>
  </div>
</template>

<script>
export default {
  name: "geoWidget",
  props: {
    infoPlace: Object,
  },
};
</script>
