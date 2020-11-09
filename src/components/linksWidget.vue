<template>
  <button class="button is-github" @click="openGit()">
    <span class="icon">
      <img :src="require('../assets/svg-icons/github-icon.svg')" />
    </span>
  </button>
</template>

<script>
export default {
  name: "linksWidget",
  props: {},
  methods: {
    openGit() {
      window.open('https://github.com/Greenvahn/xweather');
    }
  },
};
</script>
