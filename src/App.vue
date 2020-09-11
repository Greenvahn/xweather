<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ Othermessage }}
          </h1>
          <h2 class="subtitle">
            {{ retrieveData(Othermessage) }}
          </h2>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
    <p>{{ retrieveData(Othermessage) }}</p>
    </div>

    <HelloWorld :msg="retrieveData(Othermessage)" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      Othermessage: "This page uses bulma",
    };
  },
  methods: {
    retrieveData: (myMessage) => {
      const updateMessage =
        myMessage +
        " and this is the additional part from retrieve data method.";
      return updateMessage;
    },
  },
};
</script>

<style lang="scss">
@import "scss/custom";
@import "bulma";
</style>
